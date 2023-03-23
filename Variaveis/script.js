let num = [0, 1, 2, 3, 4]
num.sort()
num.push(1)
// num[3] = 6 --> adiciona no valor do array o numero 6 (apenas um exemplo)
// num.push(7) -->acrescenta mais um elemento no array
// num.length --> fala o tamanho do array
// num.sort() --> colocar em ordem crescente

console.log(`O vetor tem ${num.length} posições`);
console.log(`A ordem crescente do vetor é ${num.sort()}`);
// console.log(`O vetor acrescentando ${num.push(2)}`);


console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(0)
if(pos == -1){
    console.log('O valor não foi encontrado');
} else {
    console.log(`O valor está na posição ${pos}`);
}