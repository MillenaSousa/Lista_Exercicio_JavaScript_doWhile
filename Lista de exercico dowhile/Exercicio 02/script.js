var contador = 1;
var soma = 0;
do {
    
    if(contador % 2 == 0){
        var soma = soma + contador;   
    }
    var contador = contador + 1;
   
} while (contador <= 500);
document.write(soma + "</br>");