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
      if (arrayDeX.length >=3 && arrayDeO.length >=3) {
          clickCasillaElemento(casilla,index)
         }else{
          clickCasillaVacia(casilla,index)

      }
    });
  });
};

// Funcion clickar en una casilla sin elemento

const clickCasillaVacia=(casilla,index)=>{
  if (casilla.innerHTML == "") {
    casilla.innerHTML = interruptor ? '<h3 class="color-naranja-electrico efecto-glitch">X</h3>'
        : '<h3 class="color-azul-electrico efecto-glitch">O</h3>';
    if (interruptor) {
        textoMuestra.innerHTML = `Turno de ${sessionStorage.getItem(
        "jugador2"
        )}`;
        cuadricula[index] = "X";
        arrayDeX.push(cuadricula[index]);
        checkWinner()
    } else {
        textoMuestra.innerHTML = `Turno de ${sessionStorage.getItem(
        "jugador1"
        )}`;
        cuadricula[index] = "O";
        arrayDeO.push(cuadricula[index]);
        checkWinner()
    }

    interruptor = !interruptor;

    //Comprobamos en otra funcion si hay un ganador.......
    }
}

const clickCasillaElemento=(casilla)=>{
  if(casilla.innerHTML == '<h3 class="color-naranja-electrico efecto-glitch">X</h3>'&& interruptor == true){
    casilla.innerHTML = "";
    arrayDeX.shift()
    console.log("Quitamos X");
}else if(casilla.innerHTML == '<h3 class="color-azul-electrico efecto-glitch">O</h3>'&& interruptor == false) {
    casilla.innerHTML = "";
    arrayDeO.shift()
    console.log("Quitamos O");
}
}

// Creación de objetos player

let player1 = new Jugador(sessionStorage.getItem("jugador1"), "Placeholder");

let contadorTurnos = 0;

// Comienza el juego/se resetea el juego

const BucleJuego = () => {
  if (sessionStorage.getItem("jugador1") == null) {
    alert("Introduce el nombre del jugador 1 y 2");
  } else {
    interruptor = true;
    for (let i = 0; i < cuadricula.length; i++) {
      cuadricula[i] = "";
    }
    casillas.map((casilla) => {
      casilla.innerHTML = "";
    });
    arrayDeX.length =0;
    arrayDeO.length =0;

    textoMuestra.innerHTML = `Turno de ${sessionStorage.getItem("jugador1")}`;
    textCasillas();
  }
};

const checkWinner = ()=>{
  let ganado= false;

  for(let i =0; i<winCondition.length;i++){
    let condicion = winCondition[i];
    console.log(condicion);
    let opcionA = cuadricula[condicion[0]];
    console.log(opcionA);
    let opcionB = cuadricula[condicion[1]];
    console.log(opcionB);
    let opcionC = cuadricula[condicion[2]];
    console.log(opcionB);

    if(opcionA == ""  || opcionB == "" || opcionC == ""){
      continue;
    }
    if(opcionA == opcionB && opcionB == opcionC){
      ganado =true;
      break;
    }

  }

  if(ganado == true){
    (interruptor)?textoMuestra.innerHTML = `Ha ganado ${sessionStorage.getItem("jugador1")}` :textoMuestra.innerHTML = `Ha ganado ${sessionStorage.getItem("jugador2")}`;
    
    (interruptor)?sessionStorage.setItem("ganador", sessionStorage.getItem("jugador1")) : sessionStorage.setItem("ganador", sessionStorage.getItem("jugador2"));




    setTimeout(()=>{location.href="../pages/winner.html"}, 1000)
    
    
  }

}