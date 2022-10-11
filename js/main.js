class Jugador {
  constructor(nombre, puntos) {
    this.nombre = nombre;
    this.puntos = puntos;
  }
}

let cuadricula = ["", "", "", "", "", "", "", "", ""];
let arrayDeX = []; //For para recorrer array cuadricula y pushee las X a este array
let arrayDeO = []; //For para recorrer array cuadricula y pushee las O a este array

const botonStart = document.getElementById("boton-start");
const textoMuestra = document.getElementById("texto-muestra");

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

// -------------------------------------------------------------------------------------

// Cambiar las casillas

let casillas = Array.from(document.getElementsByClassName("casilla"));
let interruptor = true;

const textCasillas = () => {
  casillas.map((casilla, index) => {
    casilla.addEventListener("click", () => {
      if (arrayDeX.length < 3 || arrayDeO.length < 3) {
            if (casilla.innerHTML == "") {
                casilla.innerHTML = interruptor ? '<h3 class="color-naranja-electrico efecto-glitch">X</h3>'
                    : '<h3 class="color-azul-electrico efecto-glitch">O</h3>';
                if (interruptor) {
                    textoMuestra.innerHTML = `Turno de ${sessionStorage.getItem(
                    "jugador2"
                    )}`;
                    cuadricula[index] = "X";
                    arrayDeX.push(cuadricula[index]);

                    console.log(casilla.innerHTML);
                } else {
                    textoMuestra.innerHTML = `Turno de ${sessionStorage.getItem(
                    "jugador1"
                    )}`;
                    cuadricula[index] = "O";
                    arrayDeO.push(cuadricula[index]);

                    console.log(arrayDeO);
                }

                interruptor = !interruptor;

                //Comprobamos en otra funcion si hay un ganador.......
                }
         }else{
            if(casilla.innerHTML == '<h3 class="color-naranja-electrico efecto-glitch">X</h3>'){
                casilla.innerHTML = "";
                arrayDeX.shift()
                console.log(casilla.innerHTML);
            }else if(casilla.innerHTML == '<h3 class="color-azul-electrico efecto-glitch">O</h3>') {
                casilla.innerHTML = "";
                arrayDeO.shift()
                console.log(casilla.innerHTML);
            }

      }
    });
  });
};

// Creación de objetos player

let player1 = new Jugador(sessionStorage.getItem("jugador1"), "Placeholder");

let contadorTurnos = 0;

const BucleJuego = () => {
  if (sessionStorage.getItem("jugador1") == null) {
    alert("Introduce el nombre del jugador 1 y 2");
  } else {
    interruptor = true;
    for (let i = 0; i < cuadricula.length; i++) {
      cuadricula[i] = "";
    }
    casillas.map((casilla, index) => {
      casilla.innerHTML = "";
    });

    textoMuestra.innerHTML = `Turno de ${sessionStorage.getItem("jugador1")}`;
    textCasillas();
  }
};
