//Variável em JavaScript
var minhaVar = 'minha variavel';
//função básica em JS puro.
function minhaFuncao(x, y) {
    return x + y;
}
// Nós podemos usar qualquer coisa do JS puro!
//Vamos usar coisas do EcmaScript
var num = 2;
var PI = 3.14;
//Arrow Functions
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
/* Note que as duas funções são iguais, mas um
está com arrow function e outro não */
//Criar classes
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
//Tipagem de variaveis
//SE não quiser, coloque a variável com any ou não coloque nada
var n1 = 'sdsadas';
n1 = 4;
