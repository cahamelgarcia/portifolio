
var heroi ={
  nome: "Tui",
  vida :100,
  poder:10,
  defesa:5,
  guarda:true,
};
var orc ={
  nome:"onyx",
  vida:120,
  poder:20,
  defesa: 6,
};
var jogando= true;
var start_game = true;

function Main() {

  if (start_game){
  console.log("A batalha começa");
  console.log("Um orc gigante apareceu!");
  start_game = false;
}
  console.log("Qual a sua escolha?");
  console.log("1 - Atacar");
  console.log("2 - Defender");
  console.log("3 - Fugir?");

  var escolha = prompt("Escolha a sua opção:");
  if(escolha ==1) {
    Atacar();
  } else if(escolha ==2){
    Defender();
  }
  else if(escolha ==3){
    Fugir();
  }
  orcAtaque();

}
function Atacar(){
  console.log("O heroi ataca!");
  console.log("O orc perdeu "+ (heroi.poder - orc.defesa) + "de dano");
}
function Defender() {
  heroi.guarda = true;
  console.log("O heroi esta em guarda");
  console.log("Todo o dano é reduzido pela metade")
  }
  function Fugir() {
    console.log("Nosso heroi esta fugindo");
    console.log("Que vergonha!");
    jogando = false;
  }
  function Fugir() {
    console.log("Nosso heroi esta fugindo");
    console.log("Que vergonha!");
  }
  function orcAtaque() {
    console.log("O orc ataca!");
    var dano =orc.poder - heroi.defesa;
    console.log("O heroi perdeu "+(dano)+" de vida.")
     heroi.vida -=dano;
  }

while (jogando== true) {
  Main();
  console.clear();

}
