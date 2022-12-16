var contador = 0;
var fatorial = 1;
var contadora = 0;
do {
    var contador = contador + 1;
    if (contador % 2 == 1){
        do {
            var contadora = contadora + 1;
            var fatorial = fatorial * contadora
        } while (contadora != contador);
        document.write("O fatorial de " + contadora + " é " + fatorial + "</br>")
    }
} while (contador != 10);
