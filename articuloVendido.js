"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticuloVendido = void 0;
// Definición de la interfaz para los items vendidos
var ArticuloVendido = /** @class */ (function () {
    function ArticuloVendido(nombre, cantidadVendida, valor) {
        this.nombre = nombre;
        this.cantidadVendida = cantidadVendida;
        this.valor = valor;
    }
    return ArticuloVendido;
}());
exports.ArticuloVendido = ArticuloVendido;
