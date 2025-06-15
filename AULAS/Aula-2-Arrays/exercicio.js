//Exercicio 1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numeros.forEach(num => { console.log(num) })

// const somaNumeros = numeros.reduce((acc, num) => { return num + acc }, 0)
// console.log(`\nA soma dos valores é ${somaNumeros}`)

// const mediaNumeros = somaNumeros / numeros.length
// console.log(`A média dos valores é ${mediaNumeros}`)

// const numerosPares = numeros.filter(num => { return num % 2 === 0 })
// console.log(`Os números pares são ${numerosPares}\n`)

numeros.sort((a, b) => { return b - a })
console.log(numeros)
