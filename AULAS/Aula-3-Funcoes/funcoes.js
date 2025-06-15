//FUNÇÕES//

function parOuImpar(valor){
    let result

    if(valor % 2 === 0){
        result = 'Par'
    } else{
        result = 'Impar'
    }
    
    return result
}

const verificaParOuImpar = parOuImpar(4)
console.log(verificaParOuImpar)

