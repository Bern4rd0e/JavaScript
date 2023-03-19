function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancaMenino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemHomem.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultoHomem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosoHomem.jpg')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancaMenina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemMulher.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultoMulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosoMulher.jpg')
            }
        } 
        img.style.width = '200px'
        img.style.height = '200px'
        img.style.borderRadius = '50%'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}