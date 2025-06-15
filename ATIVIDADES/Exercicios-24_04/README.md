//EXERCICIOS 29/04 - 19/05//

Todos os exercícios estão salvos abaixo, para executalos basta copiá-los para o arquivo.js e caso não haja instalado a biblioteca prompt-sync, instala-la via terminal (npm i prompt-sync)

(Modulo de importação e uso da biblioteca) import PromptSync from "prompt-sync" const prompt = PromptSync()

//Exercicio 1

const numero = parseInt(prompt("Digite um número inteiro: "))

if(isNaN(numero)){ console.log("Isso não é um número válido!") } else if(numero % 2 === 0){ console.log(\nO número ${numero} é par.) } else{ console.log(\nO número ${numero} é ímpar.) }

//Exercicio 2

const idade = parseInt(prompt("Digite sua idade: "))

if(isNaN(idade) || idade < 0){ console.log("Isso não é uma idade válida!") } else if(idade >= 0 && idade <= 12){ console.log("Criança!") } else if(idade > 12 && idade < 18){ console.log("Adolescente!") } else if(idade >= 18 && idade < 60){ console.log("Adulto!") } else{ console.log("Idoso!") }

//Exercicio 3

const nota = parseFloat(prompt("Digite a nota do aluno: "))

if(isNaN(nota) || nota < 0 || nota > 10){ console.log("Isso não é uma nota válida!") } else if(nota < 5){ console.log("Reprovado!") } else if(nota >= 5 && nota <= 6){ console.log("Recuperação!") } else{ console.log("Aprovado!") }

//Exercicio 4

console.log("===== MENU INTERATIVO =====") console.log("1 - Dizer Olá") console.log("2 - Mostrar data atual") console.log("3 - Sair")

const opcao = prompt("Escolha uma opção entre 1, 2 ou 3: ")

switch (opcao) { case "1": console.log("Olá! Seja bem-vindo 😄") break case "2": console.log("Data atual:", new Date().toLocaleString()) break case "3": console.log("Encerrando o programa...") break default: console.log("Opção inválida. Tente novamente.") }

//Exercicio 5

console.log("\nCalculo do seu IMC\n")

const peso = parseFloat(prompt("Digite seu peso: ")) const altura = parseFloat(prompt("Digite sua altura: "))

if(isNaN(peso) || isNaN(altura)){ console.log("Valores inválidos!") } const imc = peso / (altura ** 2)

console.log(\nSeu IMC é ${imc.toFixed(2)} .)

if(imc < 0){ console.log("Você já desapareceu :)") } else if(imc <= 18.5){ console.log("Você está abaixo do peso!") } else if(imc > 18.5 && imc <= 24.9){ console.log("Você está no peso ideal.") } else if(imc >= 25 && imc <= 29.9){ console.log("Você está acima do peso!") } else if(imc >= 30 && imc <= 34.9){ console.log("Você está em obesidade grau 1!") } else if(imc >= 35 && imc <= 39.9){ console.log("Você está em obesidade grau 2!!") } else{ console.log("Você está em obesidade grau 3!!!") }

//Exercicio 6

const a = parseFloat(prompt("Digite o lado a: ")) const b = parseFloat(prompt("Digite o lado b: ")) const c = parseFloat(prompt("Digite o lado c: "))

if(isNaN(a) || isNaN(b) || isNaN(c)){ console.log("\nValores inválidos!") } else if(a + b > c && b + c > a && a + c > b){ console.log("\nOs valores formam um triângulo.")

if(a === b && b === c){ 
    console.log("\nFormam um Triangulo Equilátero.")
} 
else if(a === b || a === c || b === c){
    console.log("\nFormam um Triângulo Isósceles.")
}
else if(a != b && b != c && c != a){
    console.log("\nFormam um Triângulo Escaleno.")
}
}

//Exercicio 7

let precoMaca const qtdMacas = parseInt(prompt("Digite a quantidade de maçãs: ")) let total = 0

if(isNaN(qtdMacas) || qtdMacas < 0){ console.log(${qtdMacas} não é um valor válido!) } else if(qtdMacas < 12){ precoMaca = 0.30 total = precoMaca * qtdMacas console.log(O valor total é de R$${total.toFixed(2)}) } else if(qtdMacas >= 12){ precoMaca = 0.25 total = precoMaca * qtdMacas console.log(O valor total é de R$${total.toFixed(2)}) }

//Exercicio 8

const numero1 = Number(prompt("Digite um número: ")) const numero2 = Number(prompt("Digite outro número: "))

if(isNaN(numero1) || isNaN(numero2)){ console.log("Não são números válidos!") } else if(numero1 < numero2){ console.log(numero1, numero2) } else{ console.log(numero2, numero1) }

//Exercicio 9

for(let i = 10; i > 0; i--){ console.log(i) }

//Exercicio 10

const numero = parseInt(prompt("Digite um número inteiro: "))

for(let i = 10; i > 0; i--){ console.log(numero) }

//Exercicio 11

let somatoria = 0

for(let i = 0; i < 5; i++){ let numero = Number(prompt("Digite um número: ")) somatoria += numero }

console.log(A soma dos 5 número é ${somatoria})

//Exercicio 12

const numero = parseInt(prompt("Digite um número: "))

console.log(\nA tabuada do número ${numero} é :\n)

for(let i = 0; i < 11; i++){ console.log(numero * i) }

//Exercicio 13

let soma = 0 let i = 0

while(true){ let numero = parseFloat(prompt("Digite um número decimal: "))

if(numero === 0){ break }

if(!isNaN(numero)) {
    soma += numero
    i++
} 
else{
    console.log("Valor inválido. Digite um número válido.")
}
}

if(i > 0) { let media = soma / i console.log(A média é ${media}) } else{ console.log("Nenhum número foi digitado.") }

//Exercicio 14

let numero = parseInt(prompt("Digite um número: ")) let fatorial = 1 let i = 1

if (numero >= 0) { while (i <= numero) { fatorial *= i i++ } console.log(O fatorial de ${numero} é ${fatorial}) } else{ console.log("Digite um número inteiro não negativo.") }

//Exercicio 15

let n1 = 0 let n2 = 1

console.log("Os 10 primeiros números da Sequência Fibonacci:")

for(let i = 0; i < 10; i++){ console.log(n1) let proximo = n1 + n2 n1 = n2 n2 = proximo }