import prompt from 'prompt-sync'

//CALCULADORA SIMPLES (4 operações)

const input = prompt()

const num1 = Number(input("Digite um número: "))
const num2 = Number(input("Digite outro número: "))
let result


console.log("\n ADIÇÃo - 1, SUBTRAÇÂO - 2, MULTIPLICAÇÃO - 3, DIVISÃO - 4 \n")
const operacao = Number(input("Escolha uma operação: "))

if(operacao === 1){
    result = num1 + num2
    console.log(`\n O resultado da soma é ${result}!`)
} else if(operacao === 2){
    result = num1 - num2
    console.log(`\n O resultado da subtração é ${result}!`)
} else if(operacao === 3){
    result = num1 * num2
    console.log(`\n O resultado da multiplicação é ${result}!`)
} else if(operacao === 4){
    result = num1 / num2
    console.log(`\n O resultado da divisão é ${result}!`)
} else{
    console.log("\n Opção inválida!")
}