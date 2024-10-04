let vet=[]
let vet2=[]
let vetm=[]

for(let i=0;i<5;i++){

    let num = prompt("vetor")
    vet.push(num)

    vet2.push(parseInt(Math.random()*9+1))
    vetm.push(vet[i]*vet2[i])
}
for(let i=0;i<5;i++){

    console.log(vetm[i])
}