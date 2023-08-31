import { Articulo } from "./articulo";
import { Kiosko } from "./kiosko";

// Crear instancias y usar el sistema
const kiosko = new Kiosko([], []); // Inicializar sin artículos disponibles ni vendidos

const articulosIniciales: Articulo[] = [
  { nombre: "Chocolate", valor: 20, stock: 10},
  { nombre: "Masitas", valor: 12, stock: 15},
  { nombre: "Gomitas", valor: 5, stock: 100},
  { nombre: "Caramelos", valor: 6, stock: 150},
  { nombre: "Chupetines", valor: 10, stock: 25 },
  { nombre: "Agua Mineral 500cc", valor: 23, stock: 5 }
];

kiosko.cargarArticulo(articulosIniciales);

kiosko.venderArticulo("Chocolate", 15); // Intentar 2 chocolates
kiosko.venderArticulo("Masitas", 3);  // Vender 3 Masitas
kiosko.venderArticulo("Gomitas", 25); // Vender 25 Gomitas

kiosko.mostrarArticulosVendidos();