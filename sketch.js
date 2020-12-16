let angle = 0;

let palabras;

let ingresa;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  cuadr = new Cuadricula();
  input = createInput('Nombre');
  graphics = createGraphics(200, 200);




}

function draw() {
  background(0);
  graphics.background(0);
  palabras = createGraphics(200, 200);
  cuadr.mostrar();
  
 
  
  palabras.fill(255);
  palabras.textAlign(CENTER);
  palabras.textSize(45);
  palabras.text(input.value(), 100, 50);
  angle += 0.03;




  ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, 1);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);
  texture(palabras)
  box(100);
}

class Cuadricula {
  mostrar() {
    //Estos dos for() dibujan la cuadricula cada 10px en X y Y.
    for (let x = -350; x <= width; x += 10) {
      let y = -350;
      stroke(255, 100);
      line(x, y, x, 500);
    }
    for (let y = -350; y <= height; y += 10) {
      let x = -350;
      stroke(255, 100);
      line(x, y, 600, y);
    }
  }
}
