//   MÓDULO COCINA - CRUD CATÁLOGO

const prompt = require("prompt-sync")();


//Catálogo de productos

const catalogo = [

{
    id: "01",
    nombre: "Café Cappuccino",
    categoria: "Bebida",
    precio: 35,
    detalle: "Mediano"
},

{
    id: "02",
    nombre: "Café Americano",
    categoria: "Bebida",
    precio: 40,
    detalle: "Mediano"
},

{
    id: "03",
    nombre: "Pastel de chocolate",
    categoria: "Postre",
    precio: 50,
    detalle: "Rebanada individual"
},

{
    id: "04",
    nombre: "Galletas de mantequilla",
    categoria: "Postre",
    precio: 35,
    detalle: "4 piezas"
},

{
    id: "05",
    nombre: "Sandwich de jamón",
    categoria: "Comida",
    precio: 55,
    detalle: "Individual"
},

{
    id: "06",
    nombre: "Sincronizadas",
    categoria: "Comida",
    precio: 45,
    detalle: "2 piezas"
}

];

let opcion = -1;


// Crear producto
function agregarProducto(){

    let id = prompt("ID: ");
    let nombre = prompt("Nombre: ");
    let categoria = prompt("Categoría: ");
    let precio = Number(prompt("Precio: $"));
    let detalle = prompt("Detalle: ");

    catalogo.push({
        id: id,
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        detalle: detalle
    });

    console.log("Producto agregado.");
}


// Mostrar/Leer catálogo
function mostrarCatalogo(){

    console.log("\n===== CATÁLOGO =====");

    for(let i = 0; i < catalogo.length; i++){

        console.log(
            (i + 1) + ". " +
            catalogo[i].id + " | " +
            catalogo[i].nombre + " | " +
            catalogo[i].categoria + " | $" +
            catalogo[i].precio + " | " +
            catalogo[i].detalle
        );
    }

    console.log("Total productos: " + catalogo.length);
}


// Actualizar producto

function actualizarProducto(){

    mostrarCatalogo();

    let posicion = Number(prompt("Número de producto a actualizar: ")) - 1;

    if(posicion >= 0 && posicion < catalogo.length){

        catalogo[posicion].nombre = prompt("Nuevo nombre: ");
        catalogo[posicion].categoria = prompt("Nueva categoría: ");
        catalogo[posicion].precio = Number(prompt("Nuevo precio: $"));
        catalogo[posicion].detalle = prompt("Nuevo detalle: ");

        console.log("Producto actualizado.");
    }
    else{
        console.log("Número inválido.");
    }
}


// Eliminar producto

function eliminarProducto(){

    mostrarCatalogo();

    let posicion = Number(prompt("Número de producto a eliminar: ")) - 1;

    if(posicion >= 0 && posicion < catalogo.length){

        catalogo.splice(posicion, 1);

        console.log("Producto eliminado.");
    }
    else{
        console.log("Número inválido.");
    }
}


// MENÚ Cocina
while(opcion != 0){

    console.log("\n=======================");
    console.log("MÓDULO COCINA");
    console.log("=======================");
    console.log("1. Agregar producto");
    console.log("2. Mostrar catálogo");
    console.log("3. Actualizar producto");
    console.log("4. Eliminar producto");
    console.log("0. Salir");

    opcion = Number(prompt("Selecciona opción: "));

    switch(opcion){

        case 1:
            agregarProducto();
            break;

        case 2:
            mostrarCatalogo();
            break;

        case 3:
            actualizarProducto();
            break;

        case 4:
            eliminarProducto();
            break;

        case 0:
            console.log("Sistema cerrado.");
            break;

        default:
            console.log("Opción inválida.");
    }
}
