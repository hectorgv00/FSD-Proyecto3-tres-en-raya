let y1 = ["0","0","0"]
let y2 = ["0","0","0"]
let y3 = ["0","0","0"]

let cuadricula =[y1,y2,y3]

const botonStart = document.getElementById("boton-start");
const textoMuestra =document.getElementById("texto-muestra");


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




casilla11.addEventListener("click", Cambiocasilla=>(
    document.getElementById("texto-11").innerHTML = "X"
));


let contadorTurnos =0;


const BucleJuego =()=>{
   for(let i = 0; i<10; i++){
        contadorTurnos++
        if(contadorTurnos%2==0){
            textoMuestra.innerHTML= `Turno del jugador 2`
        }else{
            textoMuestra.innerHTML= `Turno del jugador 1`
        }
    }
}


botonStart.addEventListener("click", BucleJuego())



