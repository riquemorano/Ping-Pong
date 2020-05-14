//Tamanho 
x = 1365;
y = 620;

//variáveis da bolinha
let xBolinha = x / 2;
let yBolinha = y / 2;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 10;
let velocidadeYBolinha = 10;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let velocidadeY;

//variáveis do oponente
let xRaqueteOponente = x - 15;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
    createCanvas(x, y);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    //verificaColisaoRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width ||
        xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height ||
        yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x, y) {
    rect(x, y, raqueteComprimento,
        raqueteAltura);
}

function movimentaMinhaRaquete() {
    velocidadeY = yBolinha - yRaquete - raqueteComprimento / 2 - Math.ceil(Math.random() * 20);
    yRaquete += velocidadeY

    /*if (keyIsDown(UP_ARROW)) {
            yRaquete -= 10;
        }
    if (keyIsDown(DOWN_ARROW)) {
            yRaquete += 10;
        }
        */
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento &&
        yBolinha - raio < yRaquete + raqueteAltura &&
        yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura,
        xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente;
    yRaqueteOponente += velocidadeYOponente - Math.random() * 20
}

function incluiPlacar() {
    fill(255);
    text(meusPontos, (x / 2) + 50, 26);
    text(pontosDoOponente, (x / 2) - 50, 26);
}

function marcaPonto() {
    if (xBolinha > x - 10) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
    }
}