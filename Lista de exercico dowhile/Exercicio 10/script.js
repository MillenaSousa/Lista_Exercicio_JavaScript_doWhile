var dividendo = parseInt(prompt("Digite o valor do dividendo: "));
var divisor = parseInt(prompt("Digite o valor do divisor: "));
var contador = 0;
var quociente = 0;

do {
    var quociente = quociente + divisor;
    var contador = contador + 1;
} while ( quociente != dividendo);

document.write(dividendo + " / " +  divisor + " = " + contador)