var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = "#8b8b8b"
var jogador1 = {
  px:80,
  py:260,
  tx:30,
  ty:200,
  dir: 0,
}
var jogador2 ={
  px:1200,
  py:140,
  tx:30,
  ty:200,
  dir: 0,
}
var bolinha = {
  px:1200/2-15,
  py:720/2-15,
  tx:30,
  ty:30,
  dir: 8,
  diry:2,
}
var jogando = true

pincel.font = "20px Arial"
var pts1 = 0
var pts2 = 0
var mySound;
mySound = new Audio("script/Coins_Few_00.ogg");


function Move_player1(){
  if (jogador1.py <0)  {
    jogador1.py =0
  }
  else if (jogador1.py > 520) {
    jogador1.py = 520
  }
  jogador1.py += jogador1.dir

  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 87) {
      jogador1.dir = -8


    }
    else if (e.keyCode === 83) {
      jogador1.dir = +8


    }
  })
  document.addEventListener("keyup", function (e) {
    if (e.keyCode === 87 ) {
      jogador1.dir = 0

    }
    else if (e.keyCode === 83) {
      jogador1.dir = 0

    }
  })
}

function Move_player2(){
  if (jogador2.py <0)  {
    jogador2.py =0
  }
  else if (jogador2.py > 520) {
    jogador2.py = 520
  }
  jogador2.py += jogador2.dir

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 38) {
    jogador2.dir = -8


  }
  else if (e.keyCode === 40) {
    jogador2.dir = +8


  }
})

document.addEventListener("keyup", function (e) {
  if (e.keyCode === 38 ) {
    jogador2.dir = 0
  }
  else if (e.keyCode === 40) {
    jogador2.dir = 0

  }
})
}

function Move_Ball(){
  bolinha.px += bolinha.dir
  bolinha.py += bolinha.diry

  if(bolinha.py < 0){
    bolinha.diry *=-1

  }
  else if (bolinha.py >690) {
    bolinha.diry *= -1

  }
}

function Colision_ball() {

  if (bolinha.py + bolinha.ty >= jogador2.py && bolinha.py <= jogador2.py + jogador2.ty  && bolinha.px >= jogador2.px - jogador2.tx) {
    bolinha.dir *= -1
    mySound.play();

  }
  else if (bolinha.py + bolinha.ty >= jogador1.py && bolinha.py <= jogador1.py + jogador1.ty  && bolinha.px <= jogador1.px + jogador1.tx) {
    bolinha.dir *= -1
    mySound.play();


    }
}

function Points (){

  if (bolinha.px < -100) {
    bolinha.px = 625
    bolinha.py = 345
    bolinha.dir *= -1
    mySound.play();
    pts2 += 1
    }
    else if (bolinha.px > 1380)
    {
      bolinha.px = 625
      bolinha.py = 345
      bolinha.dir *= -1
      mySound.play();
      pts1 += 1
    }
}

function Desenha() {
pincel.fillRect(jogador1.px,jogador1.py,jogador1.tx,jogador1.ty)
pincel.fillRect(jogador2.px,jogador2.py,jogador2.tx,jogador2.ty)
pincel.fillRect(bolinha.px,bolinha.py,bolinha.tx,bolinha.ty)
pincel.fillText("Score 1 : " + pts1, 200, 50)
pincel.fillText("Score 2 : " + pts2, 1000, 50)
}

function GameOver(){
  if(pts1 > 2 || pts2 > 2){
    jogando = false;
  }
}

function DrawWin(){
    pincel.clearRect(0,0,1280,720)
    pincel.font = "40px Arial"
    pincel.fillText("Score 1 : " + pts1, 200, 345)
    pincel.fillText("Score 2 : " + pts2, 1000, 345)
}

function Main(){
  if(jogando){
  pincel.clearRect(0,0,1280,720)
  Desenha()
  Move_Ball()
  Colision_ball()
  Points()
  Move_player1()
  Move_player2()
  GameOver()
  }
  else{
  DrawWin()
  }
}

setInterval(Main,20)
