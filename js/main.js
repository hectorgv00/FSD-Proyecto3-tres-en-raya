// Objeto Jugador 1

let objectJugador1DesJSON = sessionStorage.getItem("jugador1Object");
let objectJugador1Clean = JSON.parse(objectJugador1DesJSON);
let turnoJugador1 = `Turno de <span class="color-naranja">${sessionStorage.getItem("jugador1")}</span>`;

// Objeto Jugador2

let objectJugador2DesJSON = sessionStorage.getItem("jugador2Object");
let objectJugador2Clean = JSON.parse(objectJugador2DesJSON);
let turnoJugador2 =`Turno de <span class="color-azul">${sessionStorage.getItem("jugador2")}</span>`;


// X y O

let xNaranja = '<h3 class="color-naranja-electrico efecto-glitch">X</h3>';
let oAzul = '<h3 class="color-azul-electrico efecto-glitch">O</h3>';

// Arrays

let cuadricula = ["", "", "", "", "", "", "", "", ""];
let arrayDeX = []; //For para recorrer array cuadricula y pushee las X a este array
let arrayDeO = []; //For para recorrer array cuadricula y pushee las O a este array
let aleatorio=0;
let casillas = Array.from(document.getElementsByClassName("casilla"));
let interruptor = true;


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


// DOM

const botonStart = document.getElementById("boton-start");
const textoMuestra = document.getElementById("texto-muestra");
const placeholderContador = document.getElementById("contador");

// Medidor de puntos/turnos y stop;

let medidorPuntos;
let punto = 0;
let contadorTurnos = 0;
const stopMedidorPuntos = () => clearInterval(medidorPuntos);

// Comienza el juego/se resetea el juego

const BucleJuego = () => {
  medidorPuntos = setInterval(() => {
    punto = punto +1;
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
  casillas.map((casilla) => {casilla.innerHTML = "";});
  arrayDeX.length = 0;
  arrayDeO.length = 0;
  textoMuestra.innerHTML = turnoJugador1;
}


// Cambiar las casillas


const textCasillas = () => {
  if(objectJugador1Clean.humano == false && objectJugador2Clean.humano == true){
    // Primera ficha CPU vs Jugador 2
    document.getElementsByClassName("casilla")[aleatorio].innerHTML = xNaranja;
    textoMuestra.innerHTML = turnoJugador2;
    cuadricula[aleatorio] = "X";
    arrayDeX.push(cuadricula[aleatorio]);
    contadorTurnos += 1;
    placeholderContador.innerHTML = contadorTurnos;
}

// Mapeo de casillas para el Add event listener
  casillas.map((casilla, index) => {
    casilla.addEventListener("click", () => {
      if (arrayDeX.length >= 3 && arrayDeO.length >= 3) {
        if (objectJugador1Clean.humano == true && objectJugador2Clean.humano == true) {
          clickCasillaElemento(casilla, index);
        } else if (objectJugador1Clean.humano == true && objectJugador2Clean.humano == false) {
          clickCasillaElementoJ1VCpu(casilla, index);
        }else if(objectJugador1Clean.humano == false && objectJugador2Clean.humano == true){
          clickCasillaElementoCPUVJ2(casilla,index);
        }
      } else {
        if (objectJugador1Clean.humano == true && objectJugador2Clean.humano == true) {
          clickCasillaVacia(casilla, index);
        } else if (objectJugador1Clean.humano == true && objectJugador2Clean.humano == false) {
          clickCasillaVaciaJ1VCpu(casilla, index);
        }else if(objectJugador1Clean.humano == false && objectJugador2Clean.humano == true){
          clickCasillaVaciaCPUVJ2(casilla,index);
        }
      }
    });
  });
};



// Funcion clickar en una casilla sin elemento J1 vs J2

const clickCasillaVacia = (casilla, index) => {
  if (casilla.innerHTML == "") {
    if (interruptor) {
      pintarCasillaVacia(casilla,xNaranja,turnoJugador2,"X",arrayDeX,index)
    } else {
      pintarCasillaVacia(casilla,oAzul,turnoJugador1,"O",arrayDeO,index)
    }
  }
};

// Pinta la casilla en la que se haga click

const pintarCasillaVacia=(casilla,color,jugador,ficha,arrayDe,index)=>{
  casilla.innerHTML=color;
  textoMuestra.innerHTML = jugador;
  cuadricula[index] = ficha;
  arrayDe.push(cuadricula[index]);
  contadorTurnos += 1;
  placeholderContador.innerHTML = contadorTurnos;
  checkWinner();
  interruptor = !interruptor;

}

// click en una casilla con elemento J1 vs J2

const clickCasillaElemento = (casilla, index) => {
  if (casilla.innerHTML == xNaranja && interruptor == true) {
    borraCasillaElementoJ(casilla,arrayDeX,index)
  } else if (casilla.innerHTML == oAzul && interruptor == false) {
    borraCasillaElementoJ(casilla,arrayDeO,index)
  }
};

// Borra la casilla JvJ

const borraCasillaElementoJ=(casilla,arrayDe,index)=>{
  casilla.innerHTML = "";
  arrayDe.shift();
  cuadricula[index] = "";
}

// Casilla Vacia J1 vs Cpu


const clickCasillaVaciaJ1VCpu = (casilla, index) => {
  if (casilla.innerHTML == "") {
    if (interruptor) {
      pintarCasillaVacia(casilla,xNaranja,turnoJugador2,"X",arrayDeX,index);
      setTimeout(()=>{

      pintarCasillaCPU(oAzul,turnoJugador1,"O");
    }, 1500)

  }
};

// Pinta casilla para CPU
const pintarCasillaCPU=(color,jugador,ficha)=>{
    let aleatorio = parseInt(Math.random() *10);
    while(cuadricula[aleatorio] !=""){
      aleatorio = parseInt(Math.random() *10);
    }
    casillas[aleatorio].innerHTML = color;
    textoMuestra.innerHTML = jugador;
    cuadricula[aleatorio] = ficha;
    arrayDeO.push(cuadricula[aleatorio]);
    contadorTurnos += 1;
    placeholderContador.innerHTML = contadorTurnos;
    checkWinner();
    interruptor = !interruptor;

}
}

// Casilla con elemento J1 vs CPU

const clickCasillaElementoJ1VCpu = (casilla, index) => {
  if (casilla.innerHTML == xNaranja && interruptor == true) {
    borraCasillaElementoJ(casilla,arrayDeX,index)

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

const clickCasillaVaciaCPUVJ2 = (casilla,index) => {
  if (casilla.innerHTML == "") {
    interruptor=!interruptor;
    if (!interruptor) {
      pintarCasillaVacia(casilla,oAzul,turnoJugador1,"O",arrayDeO,index)
      if(arrayDeX.length<3 && arrayDeO.length<3){
      setTimeout(()=>{
        let aleatorio = parseInt(Math.random() *10);
        while(cuadricula[aleatorio] !=""){
          aleatorio = parseInt(Math.random() *10);
        }
        casillas[aleatorio].innerHTML =xNaranja;
        textoMuestra.innerHTML = turnoJugador2;
        cuadricula[aleatorio] = "X"
        arrayDeX.push(cuadricula[aleatorio]);
        contadorTurnos += 1;
        placeholderContador.innerHTML = contadorTurnos;
        checkWinner();
      }, 1500)
      }else{ setTimeout(() => {
        aleatorio = parseInt(Math.random() *10);
        while(cuadricula[aleatorio] !='X'){
          aleatorio = parseInt(Math.random() *10);
        }
        casillas[aleatorio].innerHTML = "";
        arrayDeX.shift();
        cuadricula[aleatorio] = "";
      }, 1000);
      
      setTimeout(()=>{
        let aleatorio = parseInt(Math.random() *10);
        while(cuadricula[aleatorio] !=""){
          aleatorio = parseInt(Math.random() *10);
        }
        casillas[aleatorio].innerHTML = xNaranja;

        textoMuestra.innerHTML = turnoJugador2;

        cuadricula[aleatorio] = "X";
        arrayDeX.push(cuadricula[aleatorio]);
        contadorTurnos += 1;
        placeholderContador.innerHTML = contadorTurnos;
        checkWinner();
        interruptor = !interruptor;
      }, 1500)
      
    }
    }
    
  }
};

const clickCasillaElementoCPUVJ2 = (casilla, index) => {
  if (casilla.innerHTML == oAzul && interruptor == false) {
    casilla.innerHTML = "";
    arrayDeO.shift();
    cuadricula[index] = "";
    interruptor = !interruptor;
    }
};


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
      ganadorJ1();
    } else {
      ganadorJ2();
    }
    location.href = "../pages/winner.html";
  }
};

const ganadorJ1=()=>{
  textoMuestra.innerHTML = `Ha ganado <span class="color-naranja">${sessionStorage.getItem("jugador1")}</span>`;
  sessionStorage.setItem("ganador",`<span class="color-naranja">${sessionStorage.getItem("jugador1")}</span>`);
  sessionStorage.setItem("puntosGanador", punto + contadorTurnos);
  sessionStorage.setItem("puntosGanadorJ1", punto + contadorTurnos);
  sessionStorage.setItem("puntosGanadorJ2", punto - contadorTurnos);
  stopMedidorPuntos();
}

const ganadorJ2=()=>{
  textoMuestra.innerHTML = `Ha ganado <span class="color-azul">${sessionStorage.getItem("jugador2")}</span>`;
  sessionStorage.setItem("ganador",`<span class="color-azul">${sessionStorage.getItem("jugador2")}</span>`);
  sessionStorage.setItem("puntosGanador", punto + contadorTurnos);
  sessionStorage.setItem("puntosGanadorJ2", punto + contadorTurnos);
  sessionStorage.setItem("puntosGanadorJ1", punto - contadorTurnos);
  stopMedidorPuntos();
}
