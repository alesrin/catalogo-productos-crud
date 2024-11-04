import { Injectable } from '@angular/core';
import { Producto } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Portátil', precio: 1000, categoria: 'Electrónica' },
    { id: 2, nombre: 'Camisa', precio: 20, categoria: 'Ropa' }
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  addProducto(producto: Producto): void {
    producto.id = Math.floor(Math.random() * 1000); // Asigna un ID aleatorio
    this.productos.push(producto);
  }

  updateProducto(productoActualizado: Producto): void {
    const index = this.productos.findIndex(p => p.id === productoActualizado.id);
    if (index !== -1) {
      this.productos[index] = productoActualizado;
    }
  }

  deleteProducto(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}