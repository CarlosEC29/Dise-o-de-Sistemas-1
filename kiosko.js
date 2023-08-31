"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kiosko = void 0;
var articuloVendido_1 = require("./articuloVendido");
var Kiosko = /** @class */ (function () {
    function Kiosko(articulosDisponibles, articulosVendidos) {
        this.articulosDisponibles = [];
        this.articulosVendidos = [];
        this.articulosDisponibles = articulosDisponibles;
        this.articulosVendidos = articulosVendidos;
    }
    Kiosko.prototype.cargarArticulo = function (articulos) {
        this.articulosDisponibles = articulos;
    };
    Kiosko.prototype.venderArticulo = function (nombre, cantidad) {
        var articulo = this.articulosDisponibles.find(function (articulo) { return articulo.nombre === nombre; });
        if (articulo) {
            if (cantidad <= 0) {
                console.log("Debe comprar una o más unidades.");
                return;
            }
            if (cantidad > articulo.stock) {
                console.log("No hay suficientes productos disponibles para vender.");
                return;
            }
            var valorTotal = articulo.valor * cantidad;
            this.articulosVendidos.push(new articuloVendido_1.ArticuloVendido(nombre, cantidad, articulo.valor));
            articulo.stock -= cantidad; // Actualizar el stock del artículo
            console.log("Se ha vendido ".concat(cantidad, " ").concat(articulo.nombre, "(s) por un valor total de $").concat(valorTotal, "."));
        }
        else {
            console.log("El producto no está en stock.");
        }
    };
    Kiosko.prototype.mostrarArticulosVendidos = function () {
        console.log("Productos vendidos:");
        this.articulosVendidos.forEach(function (articulo) {
            console.log("".concat(articulo.cantidadVendida, " ").concat(articulo.nombre, "(s) - Valor por unidad: $").concat(articulo.valor));
        });
    };
    return Kiosko;
}());
exports.Kiosko = Kiosko;
