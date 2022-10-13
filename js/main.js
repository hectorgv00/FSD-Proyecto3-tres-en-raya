
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


// Objeto Jugador 1

let objectJugador1DesJSON = sessionStorage.getItem("jugador1Object");
let objectJugador1Clean = JSON.parse(objectJugador1DesJSON);

// Objeto Jugador2

let objectJugador2DesJSON = sessionStorage.getItem("jugador2Object");
let objectJugador2Clean = JSON.parse(objectJugador2DesJSON);




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
        textoMuestra.innerHTML = `Turno de <span class="color-azul">${objectJugador2Clean.nombre}</span>`;
        cuadricula[index] = "X";
        arrayDeX.push(cuadricula[index]);
        contadorTurnos +=1;
        placeholderContador.innerHTML =contadorTurnos;
        checkWinner()
    } else {
        textoMuestra.innerHTML = `Turno de <span class="color-naranja">${objectJugador1Clean.nombre}</span>`;
        cuadricula[index] = "O";
        arrayDeO.push(cuadricula[index]);
        contadorTurnos +=1;
        placeholderContador.innerHTML=contadorTurnos;
        checkWinner()
    }

    interruptor = !interruptor;

    //Comprobamos en otra funcion si hay un ganador.......
    }
}

const clickCasillaElemento=(casilla,index)=>{
  if(casilla.innerHTML == '<h3 class="color-naranja-electrico efecto-glitch">X</h3>'&& interruptor == true){
    casilla.innerHTML = "";
    arrayDeX.shift()
    cuadricula[index] = "";
}else if(casilla.innerHTML == '<h3 class="color-azul-electrico efecto-glitch">O</h3>'&& interruptor == false) {
    casilla.innerHTML = "";
    arrayDeO.shift()
    cuadricula[index] = "";
}
}


let contadorTurnos = 0;



// Comienza el juego/se resetea el juego

let medidorPuntos;
let punto =0;


const BucleJuego = () => {
  medidorPuntos = setInterval(()=>{
    punto =  punto +1;
    console.log(punto);
  },1000)
  
  if (objectJugador1Clean.nombre == null||objectJugador2Clean.nombre == null) {
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

    textoMuestra.innerHTML = `Turno de <span class="color-naranja">${objectJugador1Clean.nombre}</span>`;

    textCasillas();
  }
};

const checkWinner = ()=>{
  let ganado= false;

  for(let i =0; i<winCondition.length;i++){
    let condicion = winCondition[i];
    let opcionA = cuadricula[condicion[0]];
    let opcionB = cuadricula[condicion[1]];
    let opcionC = cuadricula[condicion[2]];

    if(opcionA == ""  || opcionB == "" || opcionC == ""){
      continue;
    }
    if(opcionA == opcionB && opcionB == opcionC){
      ganado =true;
      break;
    }

  }

  if(ganado == true){
    if(interruptor==true){textoMuestra.innerHTML = `Ha ganado <span class="color-naranja">${objectJugador1Clean.nombre}</span>`;
     sessionStorage.setItem("ganador",`<span class="color-naranja">${objectJugador1Clean.nombre}</span>`);
     sessionStorage.setItem("puntosGanador",punto +contadorTurnos);
     sessionStorage.setItem("puntosGanadorJ1",punto +contadorTurnos);
     sessionStorage.setItem("puntosGanadorJ2",contadorTurnos - punto);
     stopMedidorPuntos();
  }else{ 
    textoMuestra.innerHTML = `Ha ganado <span class="color-azul">${objectJugador2Clean.nombre}</span>`;
    sessionStorage.setItem("ganador", `<span class="color-azul">${objectJugador2Clean.nombre}</span>`);
    sessionStorage.setItem("puntosGanador",punto +contadorTurnos);
    sessionStorage.setItem("puntosGanadorJ2",punto +contadorTurnos);
    sessionStorage.setItem("puntosGanadorJ1",contadorTurnos - punto);
    stopMedidorPuntos()
  }




   location.href="../pages/winner.html"
    
    
  }

}




const stopMedidorPuntos = ()=> clearInterval(medidorPuntos);
