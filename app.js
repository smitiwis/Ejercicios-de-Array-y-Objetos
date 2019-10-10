var juan = {
    nombre: "Juan",
    edad: 25,
    clase: true,
    cursos: ["javascript", "html", "javascript avanzado", "css", "php"]
}
var ana = {
    nombre: "Ana",
    edad: 35,
    clase: false,
    cursos: ["javascript avanzado", "css"]
}
var rosario = {
    nombre: "Rosario",
    edad: 19,
    clase: false,
    cursos: ["javascript", "html", "css", "php"]
}
var mateo = {
    nombre: "Mateo",
    edad: 28,
    clase: true,
    cursos: ["javascript", "php", "javascript avanzado", "css"]
}
var studiantes = [juan, ana, rosario, mateo];
/* 
//1. Mostrar  todos los estudiantes presentes(TRUE) en consola

for (var i = 0; i < studiantes.length; i++) {
    //busco a los el arreglo estudiantes con su valor "i".clase que 
    //es el valor de cada arreglo el cual puede ser true o false
    console.log(studiantes[i].clase);
    if (studiantes[i].clase === true) {
        // con esta condicion decimos si el arreglo estudiantes con su
        //valor "i".clase = true entonces que me muestre el codigo siguiente
        document.write("<li>" + studiantes[i].nombre + "</li>");
    }
} */

for (var j = 0; j < studiantes.length; j++) {
    
    for (var y = 0; y < cursos.length; y++) {
        if (studiantes.keys(cursos[Y]) === "php") {
            document.write(studiantes[j].nombre);
        }
    }
}
