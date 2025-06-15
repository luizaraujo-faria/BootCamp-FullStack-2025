
const livraria = [
    {titulo: 'Codigo Limpo', autor: 'Martin', ano: 2019},
    {titulo: 'The Gunslinger', autor: 'Stephen King', ano: 1991},
    {titulo: 'Laranja Mecanica', autor: 'Nicole', ano: 1810},
    {titulo: 'Pequeno Principe', autor: 'Fabiana', ano: 1903},
    {titulo: 'As Cronicas Marcianas', autor: 'Bradbury', ano: 2010}
]

for(const livro of livraria){
    if(livro.ano < 2000){
        // console.log(livro)
    }
}

//Contar a quantidade de filmes por gênero
const filmes = [
    {titulo: 'Senhor dos Anéis', genero: 'Fanatasia'},
    {titulo: 'Jogo da Imitação', genero: 'Historico'},
    {titulo: 'Clube da Luta', genero: 'Drama'},
    {titulo: 'Ilha do Medo', genero: 'Terror'},
    {titulo: 'Pulp Fiction', genero: 'Ação'},
    {titulo: 'Poderoso Chefão', genero: 'Máfia'},
    {titulo: 'DVD do Renight', genero: 'Historico'},
    {titulo: 'Ai que vida!', genero: 'Comédia'},
    {titulo: 'Kill Bill', genero: 'Ação'},
    {titulo: 'Batman Forever', genero: 'Heroi'},
    {titulo: 'Barman - Piada Mortal', genero: 'Heroi'},
    {titulo: 'As Branquelas', genero: 'Comédia'},
    {titulo: 'Terno de 1 Bilhao de Dólares', genero: 'Comédia'}
]

let numGenero = {}

filmes.forEach(filme => {
    if(numGenero[filme.genero]){
        numGenero[filme.genero]++
    }
    else{
        numGenero[filme.genero] = 1
    }
})

// console.table(numGenero)

//Descubra o fatorial de um número

function calcularFatorial(numero){
    let fatorial = 1

    for(let i = 1; i <= numero; i++){
        fatorial += fatorial * 1
    }

    // console.log(fatorial)
}

calcularFatorial(5)
 
//Imprima os 10 primeiros números da sequencia de fibonacci

let n1 = 0
let n2 = 1

for(let i = 0; i <= 10; i++){
    console.log(n1)
    let proximo = n1 + n2 
    n1 = n2 
    n2 = proximo
}