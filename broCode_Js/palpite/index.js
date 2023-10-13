const resposta = Math.floor(Math.random() * 10 + 1);
let tentativas = 0;

document.getElementById("submitBotao").onclick = function () {
  let palpite = document.getElementById("palpite").value;
  tentativas++;

  if (palpite <= 10 && palpite >= 1) {
    if (palpite == resposta) {
      alert(
        `Parabéns, você acertou! ${palpite} era a resposta certa! Você precisou de ${tentativas} tentativa(s).`
      );
    } else if (palpite > resposta) {
      alert('"Voz do Faustão: ERRRRROU. Muito alto."');
    } else {
      alert('"Voz do Faustão: ERRRRROU. Muito baixo."');
    }
  } else {
    alert('"Voz do Farid: BURRO (8X). Apenas números entre 1 e 10."');
  }
};