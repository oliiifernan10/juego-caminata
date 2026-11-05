var personaje;
var imagenBoton;
var fondo;
var fondoFinal;
var mostrarFondo = false;
var mostrarFondoFinal = false;
var musicaFondo;
var barrita;
var linterna;
var brujula;
var soga;
var kit;
var botella;
var protector;
var fosforo;
var mochila;
var perfume;
var planchita;
var parlante;
var maquillaje;

var barritaX = 50,  barritaY = 20,  barritaAncho = 80,  barritaAlto = 30;
var linternaX = 160, linternaY = 20,  linternaAncho = 80, linternaAlto = 80;
var brujulaX = 275, brujulaY = 20,  brujulaAncho = 60,  brujulaAlto = 65;
var sogaX = 20,   sogaY = 120, sogaAncho = 80,  sogaAlto = 60;
var kitX = 115,   kitY = 120, kitAncho = 80,  kitAlto = 80;
var botellaX = 210, botellaY = 110, botellaAncho = 60, botellaAlto = 100;
var protectorX = 15, protectorY = 230, protectorAncho = 60, protectorAlto = 100;
var fosforoX = 295,  fosforoY = 130, fosforoAncho = 70, fosforoAlto = 35;
var perfumeX = 90,   perfumeY = 220,   perfumeAncho = 70,   perfumeAlto = 90;
var planchitaX = 290, planchitaY = 230, planchitaAncho = 95, planchitaAlto = 85;
var parlanteX = 15,  parlanteY = 325, parlanteAncho = 80, parlanteAlto = 80;
var maquillajeX = 305, maquillajeY = 325, maquillajeAncho = 80, maquillajeAlto = 80;
var mochilaX = 155, mochilaY = 290, mochilaAncho = 95, mochilaAlto = 110;

var arrastrandoBarrita = false;
var arrastrandoLinterna = false;
var arrastrandoBrujula = false;
var arrastrandoSoga = false;
var arrastrandoKit = false;
var arrastrandoBotella = false;
var arrastrandoProtector = false;
var arrastrandoFosforo = false;
var arrastrandoPerfume = false;
var arrastrandoPlanchita = false;
var arrastrandoParlante = false;
var arrastrandoMaquillaje = false;

var barritaGuardada = false;
var linternaGuardada = false;
var brujulaGuardada = false;
var sogaGuardada = false;
var kitGuardado = false;
var botellaGuardada = false;
var protectorGuardado = false;
var fosforoGuardado = false;

var offsetX = 0;
var offsetY = 0;

function preload() {
  musicaFondo = loadSound('musica.mp3');
}

async function setup() {
  createCanvas(400, 400);

  personaje = await loadImage('personaje.jpeg');
  imagenBoton = await loadImage('boton (2).jpeg');
  fondo = await loadImage('fondo1.jpeg');
  fondoFinal = await loadImage('fondoFinal.jpg');
  
  barrita = await loadImage('barrita.png');
  linterna = await loadImage('linterna.png');
  brujula = await loadImage('brujula.png');
  soga = await loadImage('soga.png');
  kit = await loadImage('kit.png');
  botella = await loadImage('botella.png');
  protector = await loadImage('protector.png');
  fosforo = await loadImage('fosforo.jpeg');
  mochila = await loadImage('mochila.png');
  perfume = await loadImage('perfume.png');
  planchita = await loadImage('planchita.png');
  parlante = await loadImage('parlante.png');
  maquillaje = await loadImage('maquillaje.png');
}

function draw() {
  background(220);

  if (mostrarFondoFinal) {
    image(fondoFinal, 0, 0, 400, 400);

    push();
    textAlign(CENTER, CENTER);
    textSize(24);              
    let mensaje = "¡Felicidades, armaste la mochila\ny estás lista para la caminata!";
    
    fill(245, 230, 200);       
    noStroke();                
    rectMode(CENTER);          
    rect(200, 200, 380, 80, 10); 

    fill(100, 50, 20);         
    text(mensaje, 200, 200); 
    pop();

  } 
  else if (mostrarFondo) {
    image(fondo, 0, 0, 400, 400);

    image(mochila, mochilaX, mochilaY, mochilaAncho, mochilaAlto);

    if (!barritaGuardada) {
      if (arrastrandoBarrita) { barritaX = mouseX + offsetX; barritaY = mouseY + offsetY; }
      image(barrita, barritaX, barritaY, barritaAncho, barritaAlto);
    }

    if (!linternaGuardada) {
      if (arrastrandoLinterna) { linternaX = mouseX + offsetX; linternaY = mouseY + offsetY; }
      image(linterna, linternaX, linternaY, linternaAncho, linternaAlto);
    }

    if (!brujulaGuardada) {
      if (arrastrandoBrujula) { brujulaX = mouseX + offsetX; brujulaY = mouseY + offsetY; }
      image(brujula, brujulaX, brujulaY, brujulaAncho, brujulaAlto);
    }

    if (!sogaGuardada) {
      if (arrastrandoSoga) { sogaX = mouseX + offsetX; sogaY = mouseY + offsetY; }
      image(soga, sogaX, sogaY, sogaAncho, sogaAlto);
    }

    if (!kitGuardado) {
      if (arrastrandoKit) { kitX = mouseX + offsetX; kitY = mouseY + offsetY; }
      image(kit, kitX, kitY, kitAncho, kitAlto);
    }

    if (!botellaGuardada) {
      if (arrastrandoBotella) { botellaX = mouseX + offsetX; botellaY = mouseY + offsetY; }
      image(botella, botellaX, botellaY, botellaAncho, botellaAlto);
    }

    if (!protectorGuardado) {
      if (arrastrandoProtector) { protectorX = mouseX + offsetX; protectorY = mouseY + offsetY; }
      image(protector, protectorX, protectorY, protectorAncho, protectorAlto);
    }

    if (!fosforoGuardado) {
      if (arrastrandoFosforo) { fosforoX = mouseX + offsetX; fosforoY = mouseY + offsetY; }
      image(fosforo, fosforoX, fosforoY, fosforoAncho, fosforoAlto);
    }

    if (arrastrandoPerfume) { perfumeX = mouseX + offsetX; perfumeY = mouseY + offsetY; }
    image(perfume, perfumeX, perfumeY, perfumeAncho, perfumeAlto);

    if (arrastrandoPlanchita) { planchitaX = mouseX + offsetX; planchitaY = mouseY + offsetY; }
    image(planchita, planchitaX, planchitaY, planchitaAncho, planchitaAlto);

    if (arrastrandoParlante) { parlanteX = mouseX + offsetX; parlanteY = mouseY + offsetY; }
    image(parlante, parlanteX, parlanteY, parlanteAncho, parlanteAlto);

    if (arrastrandoMaquillaje) { maquillajeX = mouseX + offsetX; maquillajeY = mouseY + offsetY; }
    image(maquillaje, maquillajeX, maquillajeY, maquillajeAncho, maquillajeAlto);

    let todosGuardados = barritaGuardada && linternaGuardada && brujulaGuardada && 
                         sogaGuardada && kitGuardado && botellaGuardada && 
                         protectorGuardado && fosforoGuardado;

    if (todosGuardados) {
      push();
      fill(136, 231, 136);
      stroke(0);
      strokeWeight(2);
      rect(150, 10, 100, 40, 10);
      fill(0);
      noStroke();
      textSize(18);
      textAlign(CENTER, CENTER);
      text("TERMINAR", 200, 30);
      pop();
    }

  } 
  else {
    image(personaje, 0, 0, 400, 400);
    image(imagenBoton, 150, 320, 100, 80);

    push();
    textAlign(CENTER, TOP);
    textSize(20);
    fill(0);
    text("¡Trata de armar la mochila\nde caminata con Aurora!", 200, 30);
    pop();
  }
}

function mousePressed() {
  if (!mostrarFondo && !mostrarFondoFinal) {
    if (mouseX >= 150 && mouseX <= 250 && mouseY >= 320 && mouseY <= 400) {
      mostrarFondo = true;

      userStartAudio();

      if (musicaFondo && !musicaFondo.isPlaying()) {
        musicaFondo.loop();
      }
    }
  } else if (mostrarFondo && !mostrarFondoFinal) {
    let todosGuardados = barritaGuardada && linternaGuardada && brujulaGuardada && 
                         sogaGuardada && kitGuardado && botellaGuardada && 
                         protectorGuardado && fosforoGuardado;

    if (todosGuardados && mouseX >= 150 && mouseX <= 250 && mouseY >= 10 && mouseY <= 50) {
      mostrarFondoFinal = true;
    }
    else if (!barritaGuardada && mouseX >= barritaX && mouseX <= barritaX + barritaAncho && mouseY >= barritaY && mouseY <= barritaY + barritaAlto) {
      arrastrandoBarrita = true;
      offsetX = barritaX - mouseX; offsetY = barritaY - mouseY;
    }
    else if (!linternaGuardada && mouseX >= linternaX && mouseX <= linternaX + linternaAncho && mouseY >= linternaY && mouseY <= linternaY + linternaAlto) {
      arrastrandoLinterna = true;
      offsetX = linternaX - mouseX; offsetY = linternaY - mouseY;
    }
    else if (!brujulaGuardada && mouseX >= brujulaX && mouseX <= brujulaX + brujulaAncho && mouseY >= brujulaY && mouseY <= brujulaY + brujulaAlto) {
      arrastrandoBrujula = true;
      offsetX = brujulaX - mouseX; offsetY = brujulaY - mouseY;
    }
    else if (!sogaGuardada && mouseX >= sogaX && mouseX <= sogaX + sogaAncho && mouseY >= sogaY && mouseY <= sogaY + sogaAlto) {
      arrastrandoSoga = true;
      offsetX = sogaX - mouseX; offsetY = sogaY - mouseY;
    }
    else if (!kitGuardado && mouseX >= kitX && mouseX <= kitX + kitAncho && mouseY >= kitY && mouseY <= kitY + kitAlto) {
      arrastrandoKit = true;
      offsetX = kitX - mouseX; offsetY = kitY - mouseY;
    }
    else if (!botellaGuardada && mouseX >= botellaX && mouseX <= botellaX + botellaAncho && mouseY >= botellaY && mouseY <= botellaY + botellaAlto) {
      arrastrandoBotella = true;
      offsetX = botellaX - mouseX; offsetY = botellaY - mouseY;
    }
    else if (!protectorGuardado && mouseX >= protectorX && mouseX <= protectorX + protectorAncho && mouseY >= protectorY && mouseY <= protectorY + protectorAlto) {
      arrastrandoProtector = true;
      offsetX = protectorX - mouseX; offsetY = protectorY - mouseY;
    }
    else if (!fosforoGuardado && mouseX >= fosforoX && mouseX <= fosforoX + fosforoAncho && mouseY >= fosforoY && mouseY <= fosforoY + fosforoAlto) {
      arrastrandoFosforo = true;
      offsetX = fosforoX - mouseX; offsetY = fosforoY - mouseY;
    }
    else if (mouseX >= perfumeX && mouseX <= perfumeX + perfumeAncho && mouseY >= perfumeY && mouseY <= perfumeY + perfumeAlto) {
      arrastrandoPerfume = true;
      offsetX = perfumeX - mouseX; offsetY = perfumeY - mouseY;
    }
    else if (mouseX >= planchitaX && mouseX <= planchitaX + planchitaAncho && mouseY >= planchitaY && mouseY <= planchitaY + planchitaAlto) {
      arrastrandoPlanchita = true;
      offsetX = planchitaX - mouseX; offsetY = planchitaY - mouseY;
    }
    else if (mouseX >= parlanteX && mouseX <= parlanteX + parlanteAncho && mouseY >= parlanteY && mouseY <= parlanteY + parlanteAlto) {
      arrastrandoParlante = true;
      offsetX = parlanteX - mouseX; offsetY = parlanteY - mouseY;
    }
    else if (mouseX >= maquillajeX && mouseX <= maquillajeX + maquillajeAncho && mouseY >= maquillajeY && mouseY <= maquillajeY + maquillajeAlto) {
      arrastrandoMaquillaje = true;
      offsetX = maquillajeX - mouseX; offsetY = maquillajeY - mouseY;
    }
  }
}

function mouseReleased() {
  function colisionConMochila(x, y, ancho, alto) {
    return (
      x < mochilaX + mochilaAncho &&
      x + ancho > mochilaX &&
      y < mochilaY + mochilaAlto &&
      y + alto > mochilaY
    );
  }

  if (arrastrandoBarrita && colisionConMochila(barritaX, barritaY, barritaAncho, barritaAlto)) {
    barritaGuardada = true;
  }
  if (arrastrandoLinterna && colisionConMochila(linternaX, linternaY, linternaAncho, linternaAlto)) {
    linternaGuardada = true;
  }
  if (arrastrandoBrujula && colisionConMochila(brujulaX, brujulaY, brujulaAncho, brujulaAlto)) {
    brujulaGuardada = true;
  }
  if (arrastrandoSoga && colisionConMochila(sogaX, sogaY, sogaAncho, sogaAlto)) {
    sogaGuardada = true;
  }
  if (arrastrandoKit && colisionConMochila(kitX, kitY, kitAncho, kitAlto)) {
    kitGuardado = true;
  }
  if (arrastrandoBotella && colisionConMochila(botellaX, botellaY, botellaAncho, botellaAlto)) {
    botellaGuardada = true;
  }
  if (arrastrandoProtector && colisionConMochila(protectorX, protectorY, protectorAncho, protectorAlto)) {
    protectorGuardado = true;
  }
  if (arrastrandoFosforo && colisionConMochila(fosforoX, fosforoY, fosforoAncho, fosforoAlto)) {
    fosforoGuardado = true;
  }

  arrastrandoBarrita = false;
  arrastrandoLinterna = false;
  arrastrandoBrujula = false;
  arrastrandoSoga = false;
  arrastrandoKit = false;
  arrastrandoBotella = false;
  arrastrandoProtector = false;
  arrastrandoFosforo = false;
  arrastrandoPerfume = false;
  arrastrandoPlanchita = false;
  arrastrandoParlante = false;
  arrastrandoMaquillaje = false;
}