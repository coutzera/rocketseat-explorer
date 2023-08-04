// Exercício 1
alert("Hello World");

// Exercício 2
var num1 = Number(prompt("Digite um número:"));
var num2 = Number(prompt("Digite outro número:"));
var sum = num1 + num2;
alert(`A soma entre ${num1} e ${num2} é igual a ${sum}!`);

// Exercício 3
var itsVariable = prompt("Digite um valor:");
if (isNaN(itsVariable)) {
  alert("Não é um número");
} else {
  alert("É um número");
}

// Exercício 4
var itsVariable = prompt("Digite uma palavra:");
if (isNaN(itsVariable)) {
  alert("É uma string");
} else {
  alert("Não é uma string");
}

// Exercício 5
var itsVariable = prompt("Digite uma palavra:");
if (typeof itsVariable === "boolean") {
  alert("É um booleano");
} else {
  alert("Não é um booleano");
}

// Exercício 6
var num1 = Number(prompt("Digite um número:"));
var num2 = Number(prompt("Digite outro número:"));
var sub = num1 - num2;
alert(`A subtração entre ${num1} e ${num2} é igual a ${sub}!`);

// Exercício 7
var num1 = Number(prompt("Digite um número:"));
var num2 = Number(prompt("Digite outro número:"));
var mult = num1 * num2;
alert(`A multiplicação entre ${num1} e ${num2} é igual a ${mult}!`);

// Exercício 8
var num1 = Number(prompt("Digite um número:"));
var num2 = Number(prompt("Digite outro número:"));
var divi = num1 / num2;
alert(`A divisão entre ${num1} e ${num2} é igual a ${divi}!`);

// Exercício 9
var variable = Number(prompt("Digite um valor: "));
alert(variable % 2 == 0 ? "É um número par" : "Não é um número par");

// Exercício 10
var variable = Number(prompt("Digite um valor: "));
alert(variable % 2 != 0 ? "É um número ímpar" : "Não é um número ímpar");