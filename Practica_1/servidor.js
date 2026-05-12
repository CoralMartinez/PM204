
console.log("Hola Mundo JavaScript desde el servidor")


/*Promedio 2 variables */
let edad1 = 12

let edad2 = 24

console.log("Edad Promedio")
console.log((edad1+edad2)/2)

/*Medir tiempo de procesos*/
console.time("miProceso")

for(let i = 0; i < 1000000; i++) {
    // Simular un proceso
}

console.timeEnd("miProceso")

/*Objetos tipo tabla */

let usuarios= [
    {nombre: "Ivan", edad:"38"},
    {nombre: "Carlos", edad:"25"}
]

console.table(usuarios)


