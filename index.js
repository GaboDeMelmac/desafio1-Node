// const escribirTareas = require("./operaciones.js");
const { leerTareas, escribirTareas } = require("./operaciones.js");

const tareas = [
  { text: "Ir al gimnasio" },
  { text: "Buscar al niño al colegio" },
  { text: "Pagar los gastos comunes" },
  { text: "otro pago  los gastos comunes" },
];

const nomnbreArchivo = "citas.json";

// // Lista de argumentos en arreglo
// console.log(process.argv);

const parametros = process.argv;

console.log(parametros[2]);

if (parametros[2] === "registrar") {
  const tareas = leerTareas(nomnbreArchivo);
  tareas.push({
    nombre: parametros[3],
    edad: parametros[4],
    animal: parametros[5],
    color: parametros[6],
    enfermedad: parametros[7],
  });
  escribirTareas(nomnbreArchivo, tareas);
  console.log("Escribí el archivo");
} else if (parametros[2] === "leer") {
  console.log(leerTareas(nomnbreArchivo));
} else {
  console.log("Operación no válida ");
}
