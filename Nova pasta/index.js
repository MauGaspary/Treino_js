const resposta = Math.floor(Math.random() * 10 + 1)
let tentativas = 0

document.getElementById('submitBotao').onclick = function(){
    let palpite = document.getElementById('palpite').value
    tentativas++

    if(palpite == resposta){
        alert(`Parabéns, você acertou! ${palpite} era a resposta certa! Você precisou de ${tentativas} tentativa(s).`)
    }
    else if(palpite > resposta){
        alert('"Voz do Faustão": ERRRRROU. Muito alto.')
    }
    else{
        alert("Voz do Faustão: ERRRRROU. Muito baixo.")
    }
}