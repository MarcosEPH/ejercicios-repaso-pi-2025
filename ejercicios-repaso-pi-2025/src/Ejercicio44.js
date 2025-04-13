const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
];

const productosConIVA = productos.map(producto => {
    return {
        ...producto,  
        precioConIVA: producto.precio * 1.21  
    };
});

console.log(productosConIVA);