var agora = new Date()
var diasem = agora.getDay() 

console.log(diasem)

switch (diasem) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;
    case 3:
        console.log('Quarta')
        break;
    default:
        console.log('[ERRO] Dia inválido')
}
