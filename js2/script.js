var peso = parseFloat(prompt("Digite o seu peso (kg):"));
var altura = parseFloat(prompt("Digite a sua altura (m):"));

var imc = peso / (altura * altura);


if (imc <= 18.5) {
    alert("Classificação: Abaixo do peso");
} else if (imc <= 24.9) {
    alert("Classificação: Peso normal");
} else if (imc <= 29.9) {
    alert("Classificação: Sobrepeso");
} else {
    alert("Classificação: Obesidade");
}
