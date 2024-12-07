function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res') 

 if (fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] verifique os dados e tente novamente ')
 }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML=`Idade calculada: ${idade}`
    var genero = ''
    var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if (fsex[0].checked){
                genero= "homem"
                if(idade>=0 && idade < 10) { 
                    //criança
                    img.setAttribute('src', 'menino.png')
                } else if( idade < 21) {
                    //jovem
                    img.setAttribute('src', 'guri.png')
                }else if (idade< 50) {
                    //ADULTO
                    img.setAttribute('src', 'homem.png')
                }else{
                    //idoso
                    img.setAttribute('src', 'idoso.png')
                }
            }else if (fsex[1].checked){
                    genero= 'mulher'
                    if(idade>=0 && idade < 10) { 
                        //criança
                        img.setAttribute('src', 'menina.png')
                    } else if( idade < 21) {
                        //jovem
                        img.setAttribute('src', 'guria.png')
                    }else if (idade< 50) {
                        //ADULTa
                        img.setAttribute('src', 'mulher.png')
                    }else{
                        //idosa
                        img.setAttribute('src', 'idosa.png')
                    }
            }else if (fsex[1].checked){
                genero= "mulher"
             } 
           
            res.innerHTML =`Detectamos ${genero} com ${idade} anos.` 
            res.appendChild(img)
    }
}
