var valorReais = parseFloat(prompt("Digite o valor em reais:"));
var taxaDolar = 5.25;
var taxaEuro = 6.20;

var valorDolares = valorReais / taxaDolar;
var valorEuros = valorReais / taxaEuro;

alert("Valor em dólares: $" + valorDolares.toFixed(2));
alert("Valor em euros: €" + valorEuros.toFixed(2));
