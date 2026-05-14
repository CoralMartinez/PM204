

/*Catálogo de productos*/

/*Objetos y propiedades*/



const bebida1 = {
  id: "01",
  nombre: "Café Cappuccino",
  categoria: "Bebida",
  precio: 35,
  tamaño: "Mediano"
};

const bebida2 = {
  id: "02",
  nombre: "Café Americano",
  categoria: "Bebida",
  precio: 40,
  tamaño: "Mediano"
};



const postre1 = {
  id: "03",
  nombre: "Pastel de chocolate",
  categoria: "Postre",
  precio: 50,
  porcion: "Rebanada individual"
};

const postre2 = {
  id: "04",
  nombre: "Galletas de mantequilla",
  categoria: "Postre",
  precio: 35,
  porcion: "4 piezas"
};



const comida1 = {
  id: "05",
  nombre: "Sandwich de jamón",
  categoria: "Comida",
  precio: 55,
  tamaño: "Individual"
};


const comida2 = {
  id: "06",
  nombre: "Sincronizadas",
  categoria: "Comida",
  precio: 45,
  tamaño: "2 piezas"
};


/* Mostrar propiedades */
console.log("Bebidas")
console.log(bebida1.nombre);
console.log(bebida1.precio);
console.log(bebida1.tamaño);
console.log(bebida2.nombre);
console.log(bebida2.precio);
console.log(bebida2.tamaño);


console.log("Postres")
console.log(postre1.nombre);
console.log(postre1.precio);
console.log(postre1.porcion);
console.log(postre2.nombre);
console.log(postre2.precio);
console.log(postre2.porcion);

console.log("Comidas")
console.log(comida1.nombre);
console.log(comida1.precio);
console.log(comida1.tamaño);
console.log(comida2.nombre);
console.log(comida2.precio);
console.log(comida2.tamaño);

/* ARRAYS */
console.log("Catálogo de productos")
const catalogo = [bebida1, postre1, comida1];

/* Mostrar*/

console.log(catalogo);

/* ACCEDER A ELEMENTOS */

console.log(catalogo[0].nombre); // Café Cappuccino
console.log(catalogo[1].nombre); //  Café Americano
console.log(catalogo[2].nombre); // Pastel de chocolate
console.log(catalogo[3].nombre); // Galletas de mantequilla
console.log(catalogo[4].nombre); // Sandwich de jamón
console.log(catalogo[5].nombre); // Sincronizadas


console.log(catalogo.length); // 6