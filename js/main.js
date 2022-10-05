let jugador1 = {
    nombre: "",
    puntos: "",

}

let jugador2 = {
    nombre: "",
    puntos: "",

}



document.getElementById("boton-input-jugador-1").addEventListener("click", function agregarNombreJugador1(){
    let inputNombre = document.getElementById("input-jugador-1");
    let placeholderJugador1 = document.getElementById("header-jugador1");
    
    jugador1.nombre = inputNombre.value;
    inputNombre.value = "";
    placeholderJugador1.innerHTML = jugador1.nombre;

    // LocalStorage

        localStorage.setItem("jugador1", jugador1.nombre);

})

document.getElementById("boton-input-jugador-2").addEventListener("click", function agregarNombreJugador2(){
    let inputNombre = document.getElementById("input-jugador-2");
    let placeholderJugador2 = document.getElementById("header-jugador2");
    jugador2.nombre = inputNombre.value;
    inputNombre.value = "";
    placeholderJugador2.innerHTML = jugador2.nombre;
})



