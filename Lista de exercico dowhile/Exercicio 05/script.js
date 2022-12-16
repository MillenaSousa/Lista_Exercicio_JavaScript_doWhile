var contador = 1;
var numero = 0;

var soma = 0;
var contadora = 1;

do {
    var numero = parseInt(prompt("Digite um número: "));
    var fatorial = 1;
    for (contador = 1; contador <= numero; contador++) {
        var fatorial = fatorial * contador;
    };
    var soma = soma + fatorial;
    document.write(fatorial + "-");
    var contadora = contadora + 1;
} while (contadora  <= 15);
document.write("A somatoria do fatorial dos valores digitados é: " + soma);