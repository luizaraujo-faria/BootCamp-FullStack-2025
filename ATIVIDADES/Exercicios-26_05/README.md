//Exercicio 1

const date = new Date()

function ehDataValida(dia, mes, ano){
    if(dia < 1 || mes < 1 || mes > 12 || ano < 1){
        return false
    }

    const anoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if(anoBissexto && mes === 2){
        return dia <= 29
    }

    return dia <= diasPorMes[mes - 1]
}

console.log(ehDataValida(31, 4, 2025))

//Exercicio 2

const randomNum = Math.floor(Math.random() * 100) - 1
let tentativas = 0

console.log('\n!Adivinhe o número!\n')
let numJogada

if(randomNum){
    while(numJogada !== randomNum){
        numJogada = Number(input('Digite um número: '))

        if(numJogada === randomNum){
            console.log(`\nParabens, você acertou em ${tentativas} tentativas e o número era: ${randomNum}.`)
            break
        }
        else if(numJogada < randomNum){
            console.log('\nVocê errou, tente novamente!')
            console.log('O número aleatório está para cima!\n')
        }
        else if(numJogada > randomNum){
            console.log('\nVocê errou, tente novamente!')
            console.log('O número aleatório está para baixo!\n')
        }

        tentativas++
    }
}

//Exercicio 3

const frase = 'ola ola mundo mundo'
let palavras = frase.split(' ')
let palavrasUnicas = []

for(let i =0; i < frase.length; i++){
    let repitidas = false
        
    for(let j = 0; j < frase.length; j++){
        if(i !== j && palavras[i] === palavras[j]){
            repitidas = true
            break
        }
    }

    if(!repitidas){
        palavrasUnicas.push(palavras[i])
    }
}

console.log(palavrasUnicas)

//Exercicio 4

function fatorial(n){
    if(n < 0){
        throw new Error('erro, número inválido!')
    }
    else if(n === 0){
        return 1
    }
    else{
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))

//Exercicio 5

function debounce(fn, delay){
  let timerId

  return function(...args){

    clearTimeout(timerId)

    timerId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function buscarNoServidor(termo){
  console.log('Buscando por:', termo)
}

const buscarComDebounce = debounce(buscarNoServidor, 1000)

buscarComDebounce('L')
buscarComDebounce('Lu')
buscarComDebounce('Lui')
buscarComDebounce('Luiz')

//Exercicio 6

function memoize(fn) {
  const cache = {}

  return function(...args) {

    const chave = JSON.stringify(args)

    if (cache[chave] !== undefined) {
      console.log('Retornando do cache')
      return cache[chave]
    }

    const resultado = fn(...args)
    cache[chave] = resultado

    return resultado
  }
}

function soma(a, b) {
    
  console.log('Função sendo executada...')
  return a + b
}

const somaMemo = memoize(soma)

console.log(somaMemo(2, 3))
console.log(somaMemo(2, 3))
console.log(somaMemo(5, 1))
console.log(somaMemo(5, 1))

//Exercicio 7

const produtos = [
    {
        nome: 'camisa',
        preco: 13.40
    },
    {
        nome: 'calça',
        preco: 27.80
    },
    {
        nome: 'casaco',
        preco: 49.99
    },
    {
        nome: 'touca',
        preco: 8.00
    },
    {
        nome: 'meia',
        preco: 5.90
    }
]

function ordenarPorPreco(produtos){
    const produtosOrdenados = produtos.sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome)

    console.log(produtosOrdenados)
}

console.log(ordenarPorPreco(produtos))

//Exercicio 8

const vendas = [
    {cliente: 'luiz', total: 12},
    {cliente: 'tuca', total: 23},
    {cliente: 'aldo', total: 34},
    {cliente: 'tuca', total: 45}
]

const totalClientes = vendas.reduce((acc, venda) => {
    const { cliente, total } = venda

    if(acc[cliente]){
        acc[cliente] += total
    } 
    else{
        acc[cliente] = total
    }

    return acc
}, {})

console.log(totalClientes)

//Exercicio 9

const pares = [['nome', 'Luiz'], ['idade', 16]]

function paresParaObjeto(pares){

  const obj = {}

  for (let i = 0; i < pares.length; i++) {
    const chave = pares[i][0]
    const valor = pares[i][1]
    obj[chave] = valor
  }

  return obj
}

console.log(paresParaObjeto(pares))

const obj = { nome: 'Luiz', idade: 16 };

function objetoParaPares(obj){

  const pares = []

  for (let chave in obj) {

    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]])
    }
  }

  return pares
}

console.log(objetoParaPares(obj))