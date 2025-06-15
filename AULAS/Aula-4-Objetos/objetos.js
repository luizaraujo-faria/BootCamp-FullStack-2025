//OBJETOS//

const atleta = {
    nome: 'Ramon Dino',
    esporte: 'Fisiculturismo',
    categoria: 'Classic Physic',
    rival: 'Chris Bumbstead',

    poseArnold: function(){
        console.log(`${this.nome} está fazendo a pose clássica do arnold contra seu rival ${this.rival}.`)
    }
}

//FUNÇÃO CONSTRUTORA//

function anime(nome, personagemForte, personagemFraco, nota){
    this.nome = nome,
    this.personagemForte = personagemForte
    this.personagemFraco = personagemFraco
    this.nota = nota

    this.mostrarAnime = function(){
        return `
            nome: ${this.nome},
            maisForte: ${this.personagemForte},
            maisFraco: ${this.personagemFraco},
            nota: ${this.nota}
        `
    }
}

const onePiece = new anime('One Piece', 'Gol D. Roger', 'Smooker', 10)
// console.log(onePiece.mostrarAnime())

function jogos(titulo, genero, lancamento, empresa, jogar){
    return{
        titulo,
        genero,
        lancamento,
        empresa,
        jogar
    }
}

const jogo = jogos('Dragon Age', 'RPG', '2009', 'Bioware', () => console.log('Morrendo'))
// jogo.jogar()

//FOR IN - Itera sobre arrays//

const personagens = [{nome: 'Killua'}, 'Minato', 'Aiorus']

for(let nome in personagens){
    // console.log(personagens[nome])
}

//FOR OF - Itera sobre objetos//

const palavra = 'Teste'

for(let letra of palavra){
    // console.log(letra)
}

for(let jogo1 of Object.keys(jogo)){
    // console.log(jogo1)
}

//Exercicio//

const professor = {
    nome: 'Stark',
    Disciplina: 'Física',
    notas: {
        aluno1: [2, 0, 2, 10],
        aluno2: [3, 1, 1, 10],
    }
}

let somaNota = 0
let numeroEstudantes = 0

for(let estudante in professor.notas){
    somaNota += professor.notas[estudante] ? professor.notas[estudante].reduce((acc ,nota) => 
    acc + nota, 0) / professor.notas[estudante].length : professor.notas[estudante]
    numeroEstudantes ++
}

const media = somaNota / numeroEstudantes
console.log(`A nota média da turma é ${media.toFixed(2)}`)

media >= 5 
? console.log(`${professor.nome} está acima da média!`) 
: console.log(`${professor.nome} está abaixo da média!`)