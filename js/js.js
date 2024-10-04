let alunos = []
let soma=0

for(let i=0;i<5;i++){
    let aluno = {
        nome: "",
        nota: 0
    }

    aluno.nome=prompt("nome do aluno")
    aluno.nota=parseFloat(prompt("nota do aluno"))
    soma = soma+aluno.nota
    alunos.push(aluno)
}
let media = soma/5

for(let i=0;i<5;i++){

    if(alunos[i].nota<media){
        console.log(alunos[i].nome)
    }
}