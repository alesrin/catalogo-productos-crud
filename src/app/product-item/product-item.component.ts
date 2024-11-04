import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() producto!: Producto;
  @Output() editar = new EventEmitter<Producto>();
  @Output() eliminar = new EventEmitter<number>();

  onEdit(): void {
    this.editar.emit(this.producto);
  }

  onDelete(): void {
    this.eliminar.emit(this.producto.id);
  }
}
