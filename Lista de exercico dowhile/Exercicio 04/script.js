var numero = 1;
var contador = 0;
var grao = 0;

do {
    document.write(grao + "</br>");
    var grao = (grao + grao) + numero;
    var contador = contador + 1
    
} while (contador != 64);
