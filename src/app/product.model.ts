export interface Producto {
  id: number;      // ID único del producto
  nombre: string;  // Nombre del producto
  precio: number;  // Precio del producto
  categoria: string; // Categoría del producto (por ejemplo, "Electrónica", "Ropa", etc.)
}



//Interfaces: SOLO define la estructura de un objeto. Necesito especificar qué propiedades va a tener un objeto SIN PREOCUPARME DE CÓMO LO VOY A IMPLEMENTAR.
//Clases: Crea instancias de un objeto CON PROPIEDADES Y MÉTODOS. Las utilizo cuando quiero representar un concepto que tiene un comportamiento específico