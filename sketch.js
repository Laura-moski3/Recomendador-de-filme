//Enrolados, LIVRE, fantasia, aventura
//Valente, LIVRE, infantil, aventura
//Mulan, LIVRE, infantil, musical
//A Bela e a Fera, 10, infantil, musical
//Frozen, 10, infantil, musical
//Cinderela, LIVRE, fantasia, musical
//Moana, LIVRE, infantil, aventura
let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Frozen";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "A Bela e a Fera";          
        } else{
         return "Valente";
        }
      } else {
        if (gostaDeFantasia) {
          return "Enrolados";
        } else {
          return "Moana";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Cinderela";
    } else {
      return "Mulan";
    }
  }
}