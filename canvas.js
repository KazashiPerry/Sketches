const typeCanvas = document.querySelector('canvas'); // Se crea un nuevo canvas utilizando el método createElement del objeto document
const typeContext = typeCanvas.getContext('2d'); // Se obtiene el contexto de dibujo 2D del nuevo canvas

const canvasSketch = require('canvas-sketch'); // Se importa el módulo canvas-sketch
const random = require('canvas-sketch-util/random'); // Se importa el módulo random del paquete canvas-sketch-util

const settings = { // Se define un objeto settings con las dimensiones del canvas
  dimensions: [ 1080, 1080 ]
};

