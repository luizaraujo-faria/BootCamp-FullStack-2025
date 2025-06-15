//ESTRUTURAS DE SAIDA NO TERMINAL
console.log("Texto com aspas duplas!")
console.log('Text com "apas simples"!')
console.log(`Texto com crase para interpolação!`)

//TIPO DO VLAOR
console.log(typeof(1.5))
console.log(typeof("1.5"))

//CRIAR VARIAVEIS
let name = "Shaolin"
const city = "São Paulo"
var anotherName = "Luiz" //Torna a variavel de escopo global - tornou-se obsoleta

//TIPOS DE DADOS EM JAVASCRIPT
  // Number, String, Boolean, Null, Undefined, Object, Function

let convertType = "15"
console.log(parseInt(convertType)) //Converte para inteiro
console.log(parseFloat(convertType)) //Converte para flot/decimal
console.log(toString(convertType)) //Converte para string

//INCREMENTO/DECREMENTO
let counter = 1
console.log(counter++) //Pós incremento - imprime e depois incrementa
console.log(counter--) //Pós decremento - impreme e depois decrementa
console.log(++counter) //Pré incremento - incrementa e depois imprime
console.log(--counter) //Pré decremento - decrementa e depois imprime

//OPERADORES BÁSICOS
  //Operadores aritmeticos
      // + -Adição, - -Subtração, / -Divisão, * -Multiplicação, % -Modulo, ** -Potenciação

  //Operadores de atribuição
      // = -Recebe, += -Recebe e adiciona, -= -Recebe e subtrai

  //Operadores Relacionais
      // < -Menor, > -Maior, <= -Menor igual, >= -Maior igual, == -Igual comparativo, === -Estritamente igual

  //Operadores Logicos
      // && -E logico, || -OU logico, ! -NÃO logico

//ESTRUTURAS DE CONTROLE
  //If, Else - Condicionais
const idade = 20

if(idade >= 18 && idade <= 32){
    console.log("Pode inscrever-se")
} else{
    console.log("Não pode inscrever-se")
}

//EXPRESSÃO TERNÁRIA - CONDICIONAL DE LINHA UNICA
const resultado = (18 >= idade && idade <= 32) //Condição
? console.log("Pode inscrever-se") // ? Se verdadeira
: console.log("Não pode inscrever-se") // : Se falsa

//EXERCICIOS//

//1 - Numero par ou impar
const numero = 2

const tipoNumero = (numero % 2 == 0) ? console.log("Numero par") : console.log("Numero impar")

//2 - Maior entre 3 numeros
const numA = 1
const numB = 2
const numC = 3

if(numA > numB && numA > numC){
    console.log(`${numA} é o maior`)
} 
else if(numB > numA && numB > numC){
    console.log(`${numB} é o maior`)
} 
else{
    console.log(`${numC} é o maior`)
}
