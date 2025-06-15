//STRING//

// console.log('Shaolin Matador'.length)
// console.log('Shaolin Matador'.charAt(0))
// console.log('Shaolin Matador'.indexOf('M'))
// console.log('Shaolin Matador'.replace('Shaolin', 'Luiz'))
// console.log('Shaolin Matador'.substring(1, 9))
// console.log('shaolin matador'.toUpperCase())
// console.log('SHAOLIN MATADOR'.toLowerCase())
// console.log(' S H A O L I N M A T A D O R '.trim())

//NUMBER//

// console.log(Math.ceil(9.5))
// console.log(Math.floor(9.5))
// console.log(Math.round(9.4))
// console.log(Math.sqrt(81))
// console.log(Math.pow(9, 2))
// console.log(Math.cbrt(9, 2))
// console.log(Math.abs(81.123))
// console.log(Math.random() * 100)

//DATA//

let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())
// console.log(date.toString())
// console.log(date.toDateString())

// let date1 = new Date('2025', '5', '8')
// let date2 = new Date('2022', '4', '20')

// console.log(date1.toString())
// console.log(date2.toString())

// const milissegundos = Math.abs(date1.getTime() - date2.getTime())

// const milissegundosEmDias = (1 * 24 * 60 * 60 * 1000)

// console.log(milissegundos / milissegundosEmDias)

console.log(`0${date.getDate()}/0${date.getMonth() + 1}/${date.getFullYear()}`)
console.log((Math.random() * 15).toFixed(0))