"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kiosko_1 = require("./kiosko");
// Crear instancias y usar el sistema
var kiosko = new kiosko_1.Kiosko([], []); // Inicializar sin artículos disponibles ni vendidos
var articulosIniciales = [
    { nombre: "Chocolate", valor: 20, stock: 10 },
    { nombre: "Masitas", valor: 12, stock: 15 },
    { nombre: "Gomitas", valor: 5, stock: 100 },
    { nombre: "Caramelos", valor: 6, stock: 150 },
    { nombre: "Chupetines", valor: 10, stock: 25 }
];
kiosko.cargarArticulo(articulosIniciales);
kiosko.venderArticulo("Chocolate", 2); // Vender 2 chocolates
kiosko.venderArticulo("Galleta", 3); // Intentar vender 3 galletas (no está en stock)
kiosko.mostrarArticulosVendidos();
