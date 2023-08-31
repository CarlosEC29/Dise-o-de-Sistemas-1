// Definición de la interfaz para los items vendidos
export class ArticuloVendido {
  nombre: string;
  cantidadVendida: number;
  valor: number;

  public constructor (nombre: string, cantidadVendida: number, valor: number) {
    this.nombre = nombre;
    this.cantidadVendida = cantidadVendida;
    this.valor = valor;
  }
}

