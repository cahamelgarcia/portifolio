var canvas;//o elemento canvas sobre o qual desenharemos
var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)
var dx = 5;//a tava de variação (velocidade) horizontal do objeto
var dy = 5;//a tava de variação (velocidade) vertical do objeto
var x = 250;//posição horizontal do objeto (com valor inicial)
var y = 100;//posição vertical do objeto (com valor inicial)
var WIDTH = 500;//largura da área retangular
var HEIGHT = 200;//altura da área retangular
var playerImg = new Image();
var inimigoImg = new Image();
var xx = 505;// posicao x do inimigo
var yy = 100;// posicao y do inimigo

function myRandom(min, max, multiple) {
    return Math.round(Math.random() * (max - min) / multiple) * multiple + min;
}

function cn(){
	xx = xx - 1;
    inimigoImg.src = "https://i.imgur.com/V2yQ9kO.png";
	ctx.drawImage(inimigoImg, xx, yy);
	if (xx < 0){
		xx = 505
		yy = myRandom(5,200,5);
	}

}

function check(){ // checar colisao
	if (y == yy && x == xx){
		alert('morreu')
	}
}

function Desenhar() {
    playerImg.src = "https://i.imgur.com/u13C8nt.png";
	ctx.drawImage(playerImg, x, y);
	cn();
	check();
}

function LimparTela() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function Iniciar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(Atualizar, 10);
}

function KeyDown(evt){
    switch (evt.keyCode) {
        case 38:  /*seta para cima */
            if (y - dy > 0){
                y -= dy;
            }
            break;
        case 40:  /*set para baixo*/
            if (y + dy < 175){
                y += dy;
            }
            break;
        case 37:  /*set para esquerda*/
            if (x - dx > 0){
                x -= dx;
            }
            break;
        case 39:  /*seta para direita*/
            if (x + dx < 475){
                x += dx;
            }
            break;
    }
}

function Atualizar() {
    LimparTela();
    Desenhar();
}
window.addEventListener('keydown', KeyDown, true);
Iniciar();
