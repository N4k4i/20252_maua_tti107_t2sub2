// criando vetores:
v1 = []
console.log(v1)

// o acesso a vetores pode ser posição por posição 
// OBS.: um vetor sempre começa no 0, ou seja, v1[0]
console.log(v1[2]) // exibindo a terceira posição
console.log(v1)

v1[0] = 32
v1[1] = 'Ana'
v1[7] = 4.5
console.log (v1)

console.log('tamanho do vetor: ' + v1.length)

// iterando
v1[5] = true
for (i = 0; i < v1.length; i++){
    console.log(v1[i])
}

const nomes = ["Alexandre", "Romeu", "Ana", "Juliet", "Amanda"]

const apenasComA = nomes.filter ((n) => n.startsWith("A"));
console.log (apenasComA) 

const primeirasLetras = nomes.map (n => n.charAt("0"))
console.log (primeirasLetras)

const todosComecamComA = nomes.every (n => n.startsWith("A"))
console.log("Todos começam com A? " + todosComecamComA)

// Acumuladores (reduce)

const numeros = [1, 2, 3, 4, 5]
const soma = numeros.reduce ((acum, n) => acum + n)
console.log("A soma total é " + soma)
