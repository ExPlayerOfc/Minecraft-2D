var canvas= new fabric.Canvas('myCanvas');

playerX=10;
playerY=10;

alturaBloco=30;
larguraBloco=30;

var objetoJogador=" ";
var objetoBloco=" ";

function player_Update() {
    fabric.Image.fromURL("player.png",function (Img) {
        objetoJogador=Img;

        objetoJogador.scaleToWidth(150);
        objetoJogador.scaleToHeight(140);
        objetoJogador.set({
            top: playerY,
            left: playerX
        });
        canvas.add(objetoJogador);
});
}

function new_Image(getImage){
    fabric.Image.fromURL(getImage,function (Img) {
        objetoBloco=Img;

        objetoBloco.scaleToWidth(larguraBloco);
        objetoBloco.scaleToHeight(alturaBloco);
        objetoBloco.set({
            top: playerY,
            left: playerX
        });
        canvas.add(objetoBloco);
});
}

window.addEventListener("keydown", myKeyDown);
function myKeyDown (e) {
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true && keyPressed=="80"){
        console.log("P e Shift Precionadas Juntas");
        larguraBloco= larguraBloco+10;
        alturaBloco=  alturaBloco+10;
        document.getElementById("larguraAtual").innerHTML= larguraBloco;
        document.getElementById("alturaAtual").innerHTML= alturaBloco;
    }
    if (e.shiftKey==true && keyPressed=="77"){
        console.log("M e Shift Precionadas Juntas");
        larguraBloco= larguraBloco-10;
        alturaBloco=  alturaBloco-10;
        document.getElementById("larguraAtual").innerHTML= larguraBloco;
        document.getElementById("alturaAtual").innerHTML= alturaBloco;
    }
    if (keyPressed=="38") {
        up();
        console.log("cima");
    }
    if (keyPressed=="40") {
        down();
        console.log("baixo");
    }
    if (keyPressed=="37") {
        left();
        console.log("esquerda");
    }
    if (keyPressed=="39") {
        right();
        console.log("direita");
    }
    if (keyPressed=="87") {
        new_Image("wall.jpg");
        console.log("w");
    }
    if (keyPressed=="71") {
        new_Image("ground.png");
        console.log("g");
    }
    if (keyPressed=="76") {
        new_Image("light_green.png");
        console.log("l");
}
if (keyPressed=="84") {
    new_Image("trunk.png");
    console.log("t");
}
if (keyPressed=="82") {
    new_Image("roof.jpg");
    console.log("r");
}
if (keyPressed=="89") {
    new_Image("yellow_wall.png");
    console.log("y");
}
if (keyPressed=="68") {
    new_Image("dark_green.png");
    console.log("d");
}
if (keyPressed=="85") {
    new_Image("unique.jpg");
    console.log("u");
}
if (keyPressed=="67") {
    new_Image("cloud.jpg");
    console.log("c");
}
} 
function up() {
    if (playerY>=0) {
        playerY= playerY - alturaBloco;
        console.log("altura bloco imagem: " + alturaBloco);
        console.log("Quando A Tecla Cima For Pressionada,X: " + playerX + ",y: " + playerY);
        canvas.remove(objetoJogador);
        player_Update();
    }
}
function down() {
    if (playerY<=500) {
        playerY= playerY + alturaBloco;
        console.log("altura bloco imagem: " + alturaBloco);
        console.log("Quando A Tecla Baixo For Pressionada,X: " + playerX + ",y: " + playerY);
        canvas.remove(objetoJogador);
        player_Update();
    }
}
function right() {
    if (playerX<=850) {
        playerX= playerX + larguraBloco;
        console.log("altura bloco imagem: " + larguraBloco);
        console.log("Quando A Tecla Direita For Pressionada,X: " + playerX + ",y: " + playerY);
        canvas.remove(objetoJogador);
        player_Update();
    }
}
function left() {
    if (playerX>=0) {
        playerX= playerX - larguraBloco;
        console.log("Largura bloco imagem: " + larguraBloco);
        console.log("Quando A Tecla Esquerda For Pressionada,X: " + playerX + ",y: " + playerY);
        canvas.remove(objetoJogador);
        player_Update();
    }
}