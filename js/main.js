var productos = [];
var records = document.getElementById(records);

// Constructor para generar un nuevo producto
function Producto(compra, cantidad) {
  this.compra = compra.toLowerCase(),
  this.producttID = (productos.length + 1),
  this.cantidad = cantidad;
};

//Método para imprimir un producto en html
Producto.prototype.toHTML = function () {
  var html = '';
  html += this.compra.toUpperCase() + '<br>';
  html += 'Cantidad: ' + this.cantidades + '<br>';
  html += '<br><br>';
  return html;
}

//Función que une todas las compras guardadas en el array productos
function mergeHTML (){
  var html = '';
  for (i=0; i<productos.length; i++){
    html += productos[i].toHTML();
  }
  return html;
}

//función que imprime un producto luego de ingresarlo
function printHTML (html){
  records.printHTML = '';
  records.printHTML = html;
}

// Cuando hacen click en el boton de nueva compra, crea una nueva compra y la añade al array de productos
var addCompra = document.getElementById("nuevacompra");
addCompra.onclick = function() {
  var compra = prompt('Ingrese su nueva compra');
  var cantidad = prompt('Ingrese la cantidad');
  var produc  = new  Compra (compra, cantidad);
  this.compra=compra;
  this.cantidad=cantidad;
  productos.push(productos);
  records.printHTML(produc.toHTML());
};


// al hacerle click a mostrar todas las compras, imprime todas las compras en el html. ESTA ESTÁ BUENA, NO CAMBIAR NADA
var printAll = document.getElementById('print');
printAll.onclick = function() {
  printHTML(mergeHTML());
}
