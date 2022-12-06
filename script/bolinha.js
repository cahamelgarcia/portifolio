var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = "#8b8b8b"

var bolinha = {
  px:1200/2-15,
  py:720/2-15,
  tx:30,
  ty:30,
  dir: 8,
}
function Desenha() {
pincel.fillRect(bolinha.px,bolinha.py,bolinha.tx,bolinha.ty)
}

function Move_Ball(){
  bolinha.px += bolinha.dir

  if(bolinha.px > 1200){
    bolinha.dir*=-1
  }
if (bolinha.px <80) {
    bolinha.dir *= -1

  }
}


function Main(){
//  pincel.clearRect(0,0,1280,720)
  Desenha()
  Move_Ball()
}

setInterval(Main,20)
