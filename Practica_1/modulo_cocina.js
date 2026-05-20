const productos = [ 
    { id: 1, nombre: "Café", precio: 30, categoria: "Bebida" },

    { id: 2, nombre: "Capuchino", precio: 45, categoria: "Bebida" },

    { id: 3, nombre: "Pastel", precio: 50, categoria: "Postre" },

    { id: 4, nombre: "Galletas", precio: 25, categoria: "Postre" }
];


// MOSTRAR MENÚ

function mostrarMenu() {

    console.log("\n===== MENÚ =====");

    productos.forEach(producto => {

        console.log(
            `${producto.id}. ${producto.nombre} - $${producto.precio} - ${producto.categoria}`
        );
    });
}


// BUSCAR PRODUCTO POR ID

function buscarProducto(id) {

    return productos.find(
        producto => producto.id === id
    );
}


// PRODUCTOS BARATOS

function productosBaratos() {

    return productos.filter(
        producto => producto.precio <= 30
    );
}


// PRODUCTOS CAROS

function productosCaros() {

    return productos.filter(
        producto => producto.precio >= 45
    );
}


// BUSCAR BEBIDAS

function buscarBebidas() {

    return productos.filter(
        producto => producto.categoria === "Bebida"
    );
}


// BUSCAR POSTRES

function buscarPostres() {

    return productos.filter(
        producto => producto.categoria === "Postre"
    );
}


// EXPORTAR

module.exports = {

    mostrarMenu,
    buscarProducto,
    productosBaratos,
    productosCaros,
    buscarBebidas,
    buscarPostres
}