//Tamanho 
x = 1365;
y = 620;

//variáveis da bolinha
let xBolinha = x / 2;
let yBolinha = y / 2;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidade = 3
let velocidadeXBolinha = velocidade;
let velocidadeYBolinha = velocidade;
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

let chanceDeErrar = 0;


function setup() {
    createCanvas(x, y);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaMinhaRaquete();
    movimentaRaqueteOponente();
    verificaColisaoRaquete(xRaquete, yRaquete, xRaqueteOponente, yRaqueteOponente);
    incluiPlacar();

    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    mostraPlacar();
    marcaPonto();
}

function mostraPlacar() {
    fill(255);
    text(meusPontos, (x / 2) + 50, 26);
    text(pontosDoOponente, (x / 2) - 50, 26);
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function mostraRaquete(x, y) {
    rect(x, y, raqueteComprimento,
        raqueteAltura);
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function movimentaMinhaRaquete() {
    velocidadeY = yBolinha - yRaquete - raqueteComprimento / 2 - 30;
    yRaquete += velocidadeY + chanceDeErrar
    calculaChanceDeErrar()

    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }

}

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente + chanceDeErrar
    calculaChanceDeErrar()
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
    velocidadeY = yBolinha - yRaquete - raqueteComprimento / 2 - Math.ceil(Math.random() * 10);
    yRaquete += velocidadeY

    /*if (keyIsDown(UP_ARROW)) {
            yRaquete -= 10;
        }
    if (keyIsDown(DOWN_ARROW)) {
            yRaquete += 10;
        }
        */
}


function verificaColisaoRaquete(x, y, xo, yo) {
    if (xBolinha - raio < x + raqueteComprimento &&
        yBolinha - raio < y + raqueteAltura &&
        yBolinha + raio > y) {
        velocidadeXBolinha *= -1;
    }
    if (xBolinha + raio > xo + raqueteComprimento &&
        yBolinha - raio < yo + raqueteAltura &&
        yBolinha + raio > yo) {
        /*function verificaColisaoRaquete() {
            if (xBolinha - raio < xRaquete + raqueteComprimento &&
                yBolinha - raio < yRaquete + raqueteAltura &&
                yBolinha + raio > yRaquete) {
                velocidadeXBolinha *= -1;
            }
        }*/


        /*function verificaColisaoRaquete(x, y) {
            colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura,
                xBolinha, yBolinha, raio);
            if (colidiu) {
                velocidadeXBolinha *= -1;
            }
        }
        */
        function movimentaRaqueteOponente() {
            velocidadeYOponente = yBolinha - yRaqueteOponente;
            yRaqueteOponente += velocidadeYOponente;
        }

        function incluiPlacar() {
            stroke(255);
            textAlign(CENTER);
            textSize(16);
            fill(color(255, 140, 0));
            rect((x / 2) + 50, 10, 40, 20)
            fill(255);
            text(meusPontos, (x / 2) + 70, 26);
            fill(color(255, 140, 0));
            rect((x / 2) - 50, 10, 40, 20)
            fill(255);
            text(pontosDoOponente, (x / 2) - 30, 26);
        }


        function marcaPonto() {
            if (xBolinha > x - 10) {
                meusPontos += 1;
            }
            if (xBolinha < 10) {
                pontosDoOponente += 1;
            }
        }

        function calculaChanceDeErrar() {
            if (pontosDoOponente >= meusPontos) {
                chanceDeErrar += 1
                if (chanceDeErrar >= 39) {
                    chanceDeErrar = 40
                }
            } else {
                chanceDeErrar -= 1
                if (chanceDeErrar <= 35) {
                    chanceDeErrar = 35
                }
            }
        }
    }
}