

let cuadricula =["0","0","0","0","0","0","0","0","0"]

const botonStart = document.getElementById("boton-start");
const textoMuestra = document.getElementById("texto-muestra");

const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


// Lo que yo he utilizado para el local storage:  listaJugadores = JSON.parse(localStorage.getItem('NOMBRE_QUE_LE_QUERAIS_DAR')); /  localStorage.setItem('NOMBRE_QUE_LE_QUERAIS_DAR', JSON.stringify(listaJugadores));



// -------------------------------------------------------------------------------------

    // Cambiar las casillas

let casilla11 =  document.getElementById("cuadro11")
let casilla12 =  document.getElementById("cuadro12")
let casilla13 =  document.getElementById("cuadro13")
let casilla21 =  document.getElementById("cuadro21")
let casilla22 =  document.getElementById("cuadro22")
let casilla23 =  document.getElementById("cuadro23")
let casilla31 =  document.getElementById("cuadro31")
let casilla32 =  document.getElementById("cuadro32")
let casilla33 =  document.getElementById("cuadro33")







let contadorTurnos =0;


const BucleJuego =()=>{
   for(let i = 0; i<10; i++){
        contadorTurnos++
        if(contadorTurnos%2==0){
            textoMuestra.innerHTML= `Turno de ${sessionStorage.getItem("jugador1")}`
        }else{
            textoMuestra.innerHTML= `Turno de ${sessionStorage.getItem("jugador2")}`
        }
        console.log("hola");
        casilla11.addEventListener("click", Cambiocasilla=()=>{ if(contadorTurnos%2==0){
            document.getElementById("texto-11").innerHTML = "X"
        }else{
            document.getElementById("texto-11").innerHTML = "O"
        }
    });
    }
}



// -------------------------------Nombres Jugadores------------------------------

let inputNombre1 = document.getElementById("input-jugador-1");
let placeholderJugador1 = document.getElementById("header-jugador1");
let inputNombre2 = document.getElementById("input-jugador-2");
let placeholderJugador2 = document.getElementById("header-jugador2");

class Jugador {
    constructor(nombre, puntos){
        this.nombre = nombre;
        this.puntos = puntos;
    }
}

    // Añadir el nombre a jugador 1 y 2

            // Jugador 1



let añadirNombreJugador1 = document.getElementById("boton-input-jugador-1").addEventListener("click",  agregarNombreJugador1=()=>{
 
    
    nombreJugador1 = inputNombre1.value;
    inputNombre1.value = "";

    // SessionStorage

        sessionStorage.setItem("jugador1", nombreJugador1);
        placeholderJugador1.innerHTML = sessionStorage.getItem("jugador1");

})

let player1 = new Jugador(sessionStorage.getItem("jugador1"), "Placeholder")

console.log(player1);


placeholderJugador1.innerHTML = sessionStorage.getItem("jugador1");

        // Jugador 2



let añadirNombreJugador2 = document.getElementById("boton-input-jugador-2").addEventListener("click",  agregarNombreJugador2=()=>{

    nombreJugador2 = inputNombre2.value;
    inputNombre2.value = "";

    // SessionStorage

    sessionStorage.setItem("jugador2", nombreJugador2);
    placeholderJugador2.innerHTML = sessionStorage.getItem("jugador2");
})

placeholderJugador2.innerHTML = sessionStorage.getItem("jugador2");
