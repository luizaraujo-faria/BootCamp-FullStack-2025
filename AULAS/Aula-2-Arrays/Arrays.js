//ARRAYS BIDIMENSSIONAIS//

const listaCoisas = []

listaCoisas['Hardware'] = Array()
listaCoisas['Hardware'][0] = 'Placa de vídeo'
listaCoisas['Hardware'][1] = 'Memória RAM'
listaCoisas['Hardware']['Notebook'] = 'Dell Inspiron 14'

listaCoisas['Filmes'] = ['Senhor dos Anéis']
listaCoisas['Filmes'][1] = 'Star Wars'

console.table(listaCoisas)
console.table(listaCoisas['Hardware'])
console.table(listaCoisas['Filmes'])