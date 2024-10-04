let numero =[]


for(let i=0;i<10;i++){

    let num = prompt("num negativo")
    numero.push(num)
}
for(let i=0;i<10;i++){

    if(numero[i]<0){
        console.log(i)
    }
}