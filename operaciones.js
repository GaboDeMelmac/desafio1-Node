const fs = require("fs");

//  1.  Función para registrar una nueva cita
function escribirTareas(nomnbreArchivo, tareas) {
  fs.writeFileSync(nomnbreArchivo, JSON.stringify(tareas));
}

//  2. Función para registrar una nueva cita
function leerTareas(nomnbreArchivo) {
  if (fs.existsSync(nomnbreArchivo)) {
    const tareas = fs.readFileSync(nomnbreArchivo, "utf-8");

    return JSON.parse(tareas);
  } else {
    return [];
  }
}

module.exports = { leerTareas, escribirTareas };
