const operacoes = require("./operacoes");
const _ = require("lodash");

console.log("8 + 4 =", operacoes.adicao(8, 4));

console.log("15 - 7 =", operacoes.subtracao(15, 7));

console.log("6 * 3 =", operacoes.multiplicacao(6, 3));

console.log("20 / 5 =", operacoes.divisao(20, 5));

console.log("10 / 0 =", operacoes.divisao(10, 0));

console.log("Número aleatório:", _.random(1, 30));
