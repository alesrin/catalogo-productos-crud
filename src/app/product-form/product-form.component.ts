// src/app/product-form/product-form.component.ts

import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { Producto } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnChanges {
  @Input() producto: Producto | null = null; // Producto a editar, puede ser null
  @Output() guardar = new EventEmitter<void>();

  productoActual: Producto = { id: 0, nombre: '', precio: 0, categoria: '' };

  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['producto'] && this.producto) {
      this.productoActual = { ...this.producto }; // Carga el producto a editar
    }
  }

  onSubmit(): void {
    if (this.productoActual.id) {
      this.productService.updateProducto(this.productoActual);
    } else {
      this.productService.addProducto(this.productoActual);
    }
    this.guardar.emit(); // Notifica que se ha guardado el producto
    this.resetForm();
  }

  resetForm(): void {
    this.productoActual = { id: 0, nombre: '', precio: 0, categoria: '' };
  }
}
