// FUNCIONES GLOBALES 

//Agregar productos al stock
let productoID = 1;
let productos = [];  //array de almacenamiento

class Producto {
    constructor(nombre, valor, stock){
        this.nombre = nombre;
        this.valor = valor;
        this.stock = stock;
        this.id = productoID;
    }
}
const agregarProducto = (producto) => {
    productos.push(producto);
    productoID++;
};

//Mostrar productos en stock

const mostrarProductos = () => {
    let nombresProductos = productos.map( producto => ` ID: ${producto.id} -  Producto: ${producto.nombre} -  Valor: $${producto.valor} -  Stock: ${producto.stock}`);
    if(nombresProductos.length > 0){
        alert(nombresProductos.join("\n"));
        console.log(nombresProductos.join("\n"));
    }else{
        alert("No hay productos ingresados");
    }
};

//Eliminar productos del stock
const eliminarProducto = (id) => {
    let existe = productos.some(producto => producto.id === id);
    if(existe){
        productos = productos.filter(producto => producto.id !== id);
       
        alert(`Se elimino el producto de ID: ${id}`);
     }else{
        alert("El ID ingresado no existe");
        

    }                
};

//total de stock ingresado

const calcularStockTotal = () => {
    let stockTotal = productos.reduce((total, producto) => total + producto.stock, 0);
    alert(`El stock total de articulos es de ${stockTotal} unidades`)
} 

//SECCION DE MENUS

const menuIngresoEgresoStock = () => {
    let estado = true;
    while(estado){
        let opcion = parseInt(prompt(
            `
            Ingrese una opcion:

            1 - Agregar producto.
            2 - Eliminar producto.
            3 - Volver al menu principal.

            `
        ));
        switch (opcion){
            case 1:
                let nombre = prompt("Ingrese nombre del producto: ");
                let valor = parseFloat(prompt("Ingrese precio del producto: "));
                let stock = parseInt(prompt("Ingrese stock al producto: "));
                let producto = new Producto(nombre, valor, stock);
                agregarProducto(producto);
                break;
            case 2:
                let idProducto = parseInt(prompt("Ingrese el ID del producto a eliminar:"));
                eliminarProducto(idProducto);
                break;
            case 3:
                estado = false;
                menuPrincipal();
                break;    
            default:
                alert("Opción no válida");
        }
    }
}

//FUNCION MENU PRINCIPAL 
let encendido = true;
const menuPrincipal = () => {
    while(encendido){
        let opcion = parseInt(prompt(
            `
            ----APLICACION DE CONTROL DE STOCK----
            Ingrese una opcion:

            1 - Ingreso y egreso de productos al stock.
            2 - Mostrar productos en stock.
            3 - Salir de la aplicacion.

            `
        ));
        switch (opcion){
            case 1:
                menuIngresoEgresoStock();
                break;
            case 2:
                mostrarProductos();
                calcularStockTotal();
                break;
            case 3:
                encendido = false     //sale del bucle while
                alert("Operaciones finalizadas");
                console.log("Operaciones finalizadas");
                break;    
            default:
                alert("Opción no válida");
        }
    }
    
}
menuPrincipal();
