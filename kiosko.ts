
import { Articulo } from "./articulo";
import { ArticuloVendido } from "./articuloVendido";

export class Kiosko {
  private articulosDisponibles: Articulo[] = [];
  private articulosVendidos: ArticuloVendido[] = [];

  constructor(articulosDisponibles: Articulo[], articulosVendidos: ArticuloVendido[]) {
    this.articulosDisponibles = articulosDisponibles;
    this.articulosVendidos = articulosVendidos;
  }

  public cargarArticulo(articulos: Articulo[]): void {
    this.articulosDisponibles = articulos;
  }
  
  public venderArticulo(nombre: string, cantidad: number): void {
    const articulo = this.articulosDisponibles.find((articulo: Articulo) => articulo.nombre === nombre);
  
    if (articulo) {
      if (cantidad <= 0) {
        console.log("Debe comprar una o más unidades.");
        return;
      }
  
      if (cantidad > articulo.stock) {
        console.log("No hay suficientes productos disponibles para vender.");
        return;
      }

      const valorTotal = articulo.valor * cantidad;
      this.articulosVendidos.push(new ArticuloVendido(nombre, cantidad, articulo.valor));
      articulo.stock -= cantidad;  // Actualizar el stock del artículo
      console.log(`Se ha vendido ${cantidad} ${articulo.nombre}(s) por un valor total de $${valorTotal}.`);
    } else {
      console.log("El producto no está en stock.");
    }
  }
  
  public mostrarArticulosVendidos(): void {
    console.log("Productos vendidos:");
    this.articulosVendidos.forEach((articulo: ArticuloVendido) => {
      console.log(`${articulo.cantidadVendida} ${articulo.nombre}(s) - Valor por unidad: $${articulo.valor}`);
    });
  }
}