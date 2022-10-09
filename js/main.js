class Jugador {
    constructor(nombre, puntos){
        this.nombre = nombre;
        this.puntos = puntos;
    }
}

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



// Creación de objetos player

let player1 = new Jugador(sessionStorage.getItem("jugador1"), "Placeholder")

console.log(player1);




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


