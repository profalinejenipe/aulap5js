let palavra; 
function palavraAleatoria() {
  let palavras = ["Tecnologia", "Javascript", "Programação", "Alura", "Robótica", "P5JS", "Escola"];
  return random(palavras);
}
  function setup() {
    createCanvas(600, 400);
    
    palavra = palavraAleatoria();
    
  }
  function inicializaCores(){
    background("#00BCD4");
    fill("#3F51B5");
    textSize(64);
    textAlign(CENTER, CENTER);
    
  }
  
  function draw(){
    inicializaCores();
    let maximo = width;
    
    let minimo = 0;
    
    let quantidade = map(mouseX, 0, width, 0, palavra.length);
    if(quantidade < 1){
      palavra = palavraAleatoria();
    }
    
let parcial = palavra.substring(0,quantidade);
  text(parcial,300,200);
  
   
}
