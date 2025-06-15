const array = [1, 2, ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]

function somaValoresArray(){
    const somaValores = array.reduce((acc, val) => val + acc, 0)
    console.log(somaValores)
}

somaValoresArray()

let maior = array[0]

function maiorNumeroArray(){
    for (numero of array) {
        if(numero > maior){
            maior = numero
        }
    }

    console.log(`O maior número é ${maior}`)
}

maiorNumeroArray()