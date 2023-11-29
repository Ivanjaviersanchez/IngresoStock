// variables
let nombreProducto;
let cantidadStock;
let precioUnitario;
let sumaStock = 0;

// funcion total de stock ingresado

function stockAcumulado(num1, num2){
    sumaStock = num1 + num2;
    alert(`El stock total ingresado es de ${sumaStock} unidades`); 
}

// Solicitar que ingrese el nombre del producto
nombreProducto = prompt("Ingrese el nombre del producto:");
console.log(`Nombre del producto a ingresar:  ${nombreProducto}`);

// Ingreso de cantidades y valores
let productoOk = true;
while(productoOk){
    switch (prompt("Seleccione una opción:\n1. Ingresar unidades al stock\n2. Ingresar precio unitario\n3. Salir")) {
        case "1":
            cantidadStock = parseInt(prompt("Ingrese la cantidad a ingresar al stock:"));
            alert(`El stock ingresado de ${nombreProducto} es de: ${cantidadStock} unidades`);
            console.log(`El stock ingresado de ${nombreProducto} es de: ${cantidadStock} unidades`);
            stockAcumulado(cantidadStock, sumaStock);   //llamado a la funcion 

            break;
        case "2":
            precioUnitario = parseFloat(prompt("Ingrese el precio unitario:"));
            console.log(`El precio unitario de ${nombreProducto} es de: $ ${precioUnitario}`);
            alert(`El precio unitario de ${nombreProducto} es de: $ ${precioUnitario}`);
            break;
        case "3":
            productoOk = false     //sale del bucle while
            break;    
        default:
            console.log("Opción no válida");
    }
}
alert("Ingresos finalizados");
console.log("Ingresos finalizados");



