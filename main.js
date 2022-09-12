let nombreAlumno = prompt("Ingrese su nombre: ");
let notaPrimerParcial = parseInt(prompt("Ingrese la nota del primer parcial: "));
let notaSegundoParcial =  parseInt(prompt("Ingrese la nota del segundo parcial: "));
let promedioNotas = (notaPrimerParcial + notaSegundoParcial) / 2;

alert ("Tu promedio es de " + promedioNotas);

console.log ("El alumno " + nombreAlumno + "Primer nota: " + notaPrimerParcial + "Segunda nota: " +notaSegundoParcial);
console.log("El promedio de notas del alumno es de: " + promedioNotas);

let array1 = [nombreAlumno];
console.log("Nombre del primer alumno: ");
console.log(array1);