class Jugador {
    constructor(nombre, puntos){
        this.nombre = nombre;
        this.puntos = puntos;
    }
}

let cuadricula =["","","","","","","","",""]

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




// -------------------------------------------------------------------------------------

    // Cambiar las casillas

let casillas = Array.from(document.getElementsByClassName("casilla"));
let interruptor = true;




const textCasillas = ()=>{
 casillas.map((casilla, index) => {
    casilla.addEventListener("click", () => {
        if (casilla.innerHTML == "") {
            casilla.innerHTML = (interruptor) ? `<h3 class="color-naranja-electrico efecto-glitch">X</h3>
            </div>`: `<h3 class="color-azul-electrico efecto-glitch">O</h3>
            </div>`;
            if(interruptor){
                textoMuestra.innerHTML= `Turno de ${sessionStorage.getItem("jugador2")}`;
                cuadricula[index] = "X";
        }else{
            textoMuestra.innerHTML= `Turno de ${sessionStorage.getItem("jugador1")}`;
            cuadricula[index] = "O";
        }   

            interruptor = !interruptor;

            //Comprobamos en otra funcion si hay un ganador.......

        };
    });
});
}


// Creación de objetos player

let player1 = new Jugador(sessionStorage.getItem("jugador1"), "Placeholder")





let contadorTurnos =0;


const BucleJuego =()=>{

    for (let i = 0; i < cuadricula.length; i++) {
        cuadricula[i] = "";
    }
    casillas.map((casilla, index)=>{casilla.innerHTML = ""});

    textoMuestra.innerHTML= `Turno de ${sessionStorage.getItem("jugador1")}`
    textCasillas()
    
}


