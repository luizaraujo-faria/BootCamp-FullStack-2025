//Fatorial
 
// LIFO => Last In First Out

function fatorial(n){
    let calculo = 0
    if(n === 0){
        return 1 
    }
    else{
        return n * fatorial(n - 1)
    }
}

// console.log(fatorial(5))

function soma(n){
    if(n === 1){
        return 1
    }
    else{
        return n + soma(n - 1)
    }
}

// console.log(soma(5))

//Fibonacci

function fibonacci(n){
    if(n === 0){
        return 0
    }
    else if(n === 1){
        return 1
    }
    else{
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

console.log(fibonacci(10))

//Desafio

const categorias = [
    {
        id: 1,
        nome: 'eletronicos',
        filhos: [
            {id: 2, nome: 'Celulares', filhos: []},
            {id: 3, nome: 'Computadores', filhos: [
                {id: 4, nome: 'Notebooks', filhos: []}
            ]}
        ]
    },
    {
        id: 5,
        nome: 'Roupas',
        filhos: []
    }
]

function mostrarCategorias(objeto, nivel = 0){
    for(let categoria of objeto){
        console.log(' '.repeat(nivel + 2) + categoria.nome)
        if(categoria.filhos.length > 0){
            mostrarCategorias()
        }
    }
}

console.log(mostrarCategorias(categorias))