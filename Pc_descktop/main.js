/*
*1) Crear un array con 5 nombres
*2) Agregar mediante metodo un nombre al principio y un nombre al final
*3) Eliminarlos mediante metodo
*4) Usar un metodo que me permita unir los elementos de un array para * que queden escritos asi "Esteban - Lionel - Mathias - Fernando - * Enrique" (spoiler: existe un metodo, google it!)
*5) Crear dos objeto con 3 propiedades iguales pero valores distintos
*6) Asignarlos a un array
*7) hacer un console.table de ese array.
*/

// const ARRAY_NOMBRES=["jonathan", "esteban", "carlos", "joaquin"];

// console.log("funca");
// for(let i = 0; i < ARRAY_NOMBRES.length; i++){
//     console.log("funca");
//     console.log(ARRAY_NOMBRES[i]);
// }

// Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado)
// Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 - 16 - 24, etc.


// En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que cobra cada 
// empleado e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el programa deberá informar el importe 
// que gasta la empresa en sueldos al personal.

let empleados = 0;
let sueldo = 0;
let empleados100a300 = 0;
let empleados_mas300 = 0;
let gasto_total = 0;

empleados = parseInt(prompt("Ingrese la cantidad de empleados: "));
while (i < empleados){
    sueldo = parseInt(prompt("Ingrese el sueldo del empleado Nro "+ i + " :"));
    if(sueldo > 100 && sueldo < 300){
        empleados100a300 += empleados100a300;
    }else if(sueldo > 300){
        empleados_mas300 += empleados_mas300;
    }else{
        alert("Error al ingresar el sueldo");
    }
}
console.log("Los empleados que cobran entre 100 y 300 son: "+ empleados100a300 );
console.log("Los empleados que cobran más de 300 son: "+ empleados_mas300 );
console.log("El gasto total de sueldos al personal es de: $"+ (empleados_mas300 + empleados100a300));

