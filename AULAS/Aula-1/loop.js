import prompt from 'prompt-sync'

const input = prompt()

//LAÇOS DE REPETIÇÃO

const numero = input("Digite um número para tabuada: ")
let result

let i = 0

while(i <= 10){
    result = numero * i
    console.log(`${numero} multiplicado por ${i} é ${result}`)
    i++
}