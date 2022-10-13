let cuadricula = ["", "", "", "", "", "", "", "", ""];
let arrayDeX = []; //For para recorrer array cuadricula y pushee las X a este array
let arrayDeO = []; //For para recorrer array cuadricula y pushee las O a este array

const botonStart = document.getElementById("boton-start");
const textoMuestra = document.getElementById("texto-muestra");
const placeholderContador = document.getElementById("contador");

const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Comienza el juego/se resetea el juego

const BucleJuego = () => {
  medidorPuntos = setInterval(() => {
    punto = punto + 1;
  }, 1000);
  // Comprobador si se han insertado los nombres
  if (
    sessionStorage.getItem("jugador1") == null ||
    sessionStorage.getItem("jugador2") == null
  ) {
    alert("Introduce el nombre del jugador 1 y 2");
  } else {
      reset();
 
      textCasillas();
    
  }
};

// Limpia los arrays y el innerHTML de las casillas para poder volver a jugar al darle start

const reset = () =>{
  interruptor = true;
  for (let i = 0; i < cuadricula.length; i++) {
    cuadricula[i] = "";
  }
  casillas.map((casilla) => {
    casilla.innerHTML = "";
  });
  arrayDeX.length = 0;
  arrayDeO.length = 0;

  textoMuestra.innerHTML = `Turno de <span class="color-naranja">${sessionStorage.getItem(
    "jugador1"
  )}</span>`;
}

// Objeto Jugador 1

let objectJugador1DesJSON = sessionStorage.getItem("jugador1Object");
let objectJugador1Clean = JSON.parse(objectJugador1DesJSON);

// Objeto Jugador2

let objectJugador2DesJSON = sessionStorage.getItem("jugador2Object");
let objectJugador2Clean = JSON.parse(objectJugador2DesJSON);


// Cambiar las casillas

let casillas = Array.from(document.getElementsByClassName("casilla"));
let interruptor = true;

const textCasillas = () => {
  casillas.map((casilla, index) => {
    casilla.addEventListener("click", () => {
      if (arrayDeX.length >= 3 && arrayDeO.length >= 3) {
        if (objectJugador1Clean.humano == true && objectJugador2Clean.humano == true) {
          clickCasillaElemento(casilla, index);
        } else if (objectJugador1Clean.humano == true && objectJugador2Clean.humano == false) {
          clickCasillaElementoJ1VCpu(casilla, index);
        }else if(objectJugador1Clean.humano == false && objectJugador2Clean.humano == true){

        }
      } else {
        if (objectJugador1Clean.humano == true && objectJugador2Clean.humano == true) {
          clickCasillaVacia(casilla, index);
        } else if (objectJugador1Clean.humano == true && objectJugador2Clean.humano == false) {
          clickCasillaVaciaJ1VCpu(casilla, index);
        }else if(objectJugador1Clean.humano == false && objectJugador2Clean.humano == true){
          console.log("CPU vs humano");
          clickCasillaVaciaCPUVJ2(casilla,index);
        }
      }
    });
  });
};



// Funcion clickar en una casilla sin elemento J1 vs J2

const clickCasillaVacia = (casilla, index) => {
  if (casilla.innerHTML == "") {
    casilla.innerHTML = interruptor
      ? '<h3 class="color-naranja-electrico efecto-glitch">X</h3>'
      : '<h3 class="color-azul-electrico efecto-glitch">O</h3>';
    if (interruptor) {
      textoMuestra.innerHTML = `Turno de <span class="color-azul">${sessionStorage.getItem(
        "jugador2"
      )}</span>`;
      cuadricula[index] = "X";
      arrayDeX.push(cuadricula[index]);
      contadorTurnos += 1;
      placeholderContador.innerHTML = contadorTurnos;
      checkWinner();
    } else {
      textoMuestra.innerHTML = `Turno de <span class="color-naranja">${sessionStorage.getItem(
        "jugador1"
      )}</span>`;
      cuadricula[index] = "O";
      arrayDeO.push(cuadricula[index]);
      contadorTurnos += 1;
      placeholderContador.innerHTML = contadorTurnos;
      checkWinner();
    }
    interruptor = !interruptor;
  }
};


// click en una casilla con elemento J1 vs J2

const clickCasillaElemento = (casilla, index) => {
  if (
    casilla.innerHTML ==
      '<h3 class="color-naranja-electrico efecto-glitch">X</h3>' &&
    interruptor == true
  ) {
    casilla.innerHTML = "";
    arrayDeX.shift();
    cuadricula[index] = "";
  } else if (
    casilla.innerHTML ==
      '<h3 class="color-azul-electrico efecto-glitch">O</h3>' &&
    interruptor == false
  ) {
    casilla.innerHTML = "";
    arrayDeO.shift();
    cuadricula[index] = "";
  }
};


// Casilla Vacia J1 vs Cpu

let aleatorio=0;

const clickCasillaVaciaJ1VCpu = (casilla, index) => {
  if (casilla.innerHTML == "") {
    casilla.innerHTML = interruptor? '<h3 class="color-naranja-electrico efecto-glitch">X</h3>': '<h3 class="color-azul-electrico efecto-glitch">O</h3>';
    if (interruptor) {
      textoMuestra.innerHTML = `Turno de <span class="color-azul">${sessionStorage.getItem(
        "jugador2"
      )}</span>`;
      cuadricula[index] = "X";
      arrayDeX.push(cuadricula[index]);
      contadorTurnos += 1;
      placeholderContador.innerHTML = contadorTurnos;
      checkWinner();
      interruptor = !interruptor;
      setTimeout(()=>{
        let aleatorio = parseInt(Math.random() *10);
        while(cuadricula[aleatorio] !=""){
          aleatorio = parseInt(Math.random() *10);
        }
        casillas[aleatorio].innerHTML = '<h3 class="color-azul-electrico efecto-glitch">O</h3>';
        textoMuestra.innerHTML = `Turno de <span class="color-naranja">${sessionStorage.getItem(
          "jugador1"
        )}</span>`;
        cuadricula[aleatorio] = "O"
        arrayDeO.push(cuadricula[aleatorio]);
        contadorTurnos += 1;
        placeholderContador.innerHTML = contadorTurnos;
        checkWinner();
        interruptor = !interruptor;
      }, 1500)

    }
    
  }
};

// Casilla con elemento J1 vs CPU

const clickCasillaElementoJ1VCpu = (casilla, index) => {
  if (
    casilla.innerHTML ==
      '<h3 class="color-naranja-electrico efecto-glitch">X</h3>' &&
    interruptor == true
  ) {
    casilla.innerHTML = "";
    arrayDeX.shift();
    cuadricula[index] = "";

    setTimeout(() => {
      aleatorio = parseInt(Math.random() *10);
      while(cuadricula[aleatorio] !='O'){
        aleatorio = parseInt(Math.random() *10);
      }
      casillas[aleatorio].innerHTML = "";
      arrayDeO.shift();
      cuadricula[aleatorio] = "";
    }, 1000);

  }
};


// Casilla vacia CPU vs J2

const clickCasillaVaciaCPUVJ2 = (casilla, index) => {
  aleatorio= parseInt(Math.random()*10);
  if (cuadricula[aleatorio] == "") {
    console.log("Las cosas");
    casillas[aleatorio].click();
    casillas[aleatorio].innerHTML = interruptor? '<h3 class="color-naranja-electrico efecto-glitch">X</h3>': '<h3 class="color-azul-electrico efecto-glitch">O</h3>';
    if (interruptor) {
      textoMuestra.innerHTML = `Turno de <span class="color-azul">${sessionStorage.getItem(
        "jugador2"
      )}</span>`;
      cuadricula[aleatorio] = "X";
      arrayDeX.push(cuadricula[aleatorio]);
      contadorTurnos += 1;
      placeholderContador.innerHTML = contadorTurnos;
      checkWinner();
      interruptor = !interruptor;
      setTimeout(()=>{
        let aleatorio = parseInt(Math.random() *10);
        while(cuadricula[aleatorio] !=""){
          aleatorio = parseInt(Math.random() *10);
        }
        casillas[aleatorio].innerHTML = '<h3 class="color-azul-electrico efecto-glitch">O</h3>';
        textoMuestra.innerHTML = `Turno de <span class="color-naranja">${sessionStorage.getItem(
          "jugador1"
        )}</span>`;
        cuadricula[aleatorio] = "O"
        arrayDeO.push(cuadricula[aleatorio]);
        contadorTurnos += 1;
        placeholderContador.innerHTML = contadorTurnos;
        checkWinner();
        interruptor = !interruptor;
      }, 1500)

    }
    
  }
};


















let medidorPuntos;
let punto = 0;
let contadorTurnos = 0;
const stopMedidorPuntos = () => clearInterval(medidorPuntos);

const checkWinner = () => {
  let ganado = false;

  for (let i = 0; i < winCondition.length; i++) {
    let condicion = winCondition[i];
    let opcionA = cuadricula[condicion[0]];
    let opcionB = cuadricula[condicion[1]];
    let opcionC = cuadricula[condicion[2]];

    if (opcionA == "" || opcionB == "" || opcionC == "") {
      continue;
    }
    if (opcionA == opcionB && opcionB == opcionC) {
      ganado = true;
      break;
    }
  }

  if (ganado == true) {
    if (interruptor == true) {
      textoMuestra.innerHTML = `Ha ganado <span class="color-naranja">${sessionStorage.getItem(
        "jugador1"
      )}</span>`;
      sessionStorage.setItem(
        "ganador",
        `<span class="color-naranja">${sessionStorage.getItem(
          "jugador1"
        )}</span>`
      );
      sessionStorage.setItem("puntosGanador", punto + contadorTurnos);
      sessionStorage.setItem("puntosGanadorJ1", punto + contadorTurnos);
      sessionStorage.setItem("puntosGanadorJ2", contadorTurnos - punto);
      stopMedidorPuntos();
    } else {
      textoMuestra.innerHTML = `Ha ganado <span class="color-azul">${sessionStorage.getItem(
        "jugador2"
      )}</span>`;
      sessionStorage.setItem(
        "ganador",
        `<span class="color-azul">${sessionStorage.getItem("jugador2")}</span>`
      );
      sessionStorage.setItem("puntosGanador", punto + contadorTurnos);
      sessionStorage.setItem("puntosGanadorJ2", punto + contadorTurnos);
      sessionStorage.setItem("puntosGanadorJ1", contadorTurnos - punto);
      stopMedidorPuntos();
    }
    location.href = "../pages/winner.html";
  }
};
