const a = 20;
const nome = 'Andreia';
console.log(a, nome);

// a = 12 constantes não admitem valores novos

var x = 10;
var y = 7;
console.log('x =' + x + "\ny = " + y);

var x = 'Praça Maua'
console.log("x = " + x)

let i = 12.5
console.log("i = " + i)
// let i = 34 : let não permite redeclaração no mesmo contexto

let m = 10;
var p = 20;
of (m > 2); {
    let m = 23;
    var p = 3;
    console.log("dentro do if: \nm = " + m + "\np =" + p);
}
console.log("saiu do if:\nm =" + m + "\np = " + p)

let sobrenome = 'Machion'
console.log(nome + '' + sobrenome)
console.log(`meu nome é ${nome}`)

n1 = 2;
n2 = '3';
console.log(n1 + n2)
n4 = n1 + Number(n2)
console.log(n4)