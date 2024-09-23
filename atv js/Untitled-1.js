let peso = parseFloat(prompt("Digite o Peso da nota:"))
let num = parseFloat(prompt("Digite sua nota"))
let peso2 = parseFloat(prompt("Digite o peso da nota:"))
let num2 = parseFloat(prompt("Digite sua nota"))
let peso3 = parseFloat(prompt("Digite o peso da nota:"))
let num3 = parseFloat(prompt("Digite sua nota"))

let totalvalor
let totalpeso
let media

totalvalor = (num * peso + num2 * peso2 + num3 * peso3)
totalpeso = (peso + peso2 + peso3)
media = (totalvalor/totalpeso)

alert(media)