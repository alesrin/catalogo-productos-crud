import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Producto } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productos: Producto[] = [];
  productoParaEditar: Producto | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productos = this.productService.getProductos();
  }

  // Selecciona un producto para editar
  editarProducto(producto: Producto): void {
    this.productoParaEditar = { ...producto };
  }

  // Resetea el producto seleccionado para editar después de guardar
  resetearProductoParaEditar(): void {
    this.productoParaEditar = null;
  }

  // Elimina un producto de la lista
  eliminarProducto(id: number): void {
    this.productService.deleteProducto(id);
    this.productos = this.productService.getProductos();
  }
}
