

const audioP = Document.getElementById("musica");



function backMusic(){
  audioP.currentTime= 0;
}



function playMusic() {
    if (musica.paused) {
        musica.play();
        botao.textContent = "⏸️ Pausar";
    } else {
        musica.pause();
        botao.textContent = "▶️ Tocar";
    }
}


function nextMusic(){

    document.getElementById("musica").play();
    document.getElementById("musica2").play();
      document.getElementById("musica3").play();
        document.getElementById("musica4").play();
          document.getElementById("musica5").play();
          
        }

