
// -------------------------------Nombres Jugadores------------------------------

let inputNombre1 = document.getElementById("input-jugador-1");
let placeholderJugador1 = document.getElementById("header-jugador1");
let inputNombre2 = document.getElementById("input-jugador-2");
let placeholderJugador2 = document.getElementById("header-jugador2");



    // Añadir el nombre a jugador 1 y 2

            // Jugador 1



let añadirNombreJugador1 = document.getElementById("boton-input-jugador-1").addEventListener("click",  agregarNombreJugador1=()=>{
 
    
    nombreJugador1 = inputNombre1.value;
    inputNombre1.value = "";

    // SessionStorage

        sessionStorage.setItem("jugador1", nombreJugador1);
        placeholderJugador1.innerHTML = sessionStorage.getItem("jugador1");

})



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
