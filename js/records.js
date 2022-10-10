let placeholderJugador1 = document.getElementById("records-jugador1");
let placeholderJugador2 = document.getElementById("records-jugador2");

placeholderJugador1.innerHTML = sessionStorage.getItem("jugador1");
placeholderJugador2.innerHTML = sessionStorage.getItem("jugador2");

console.log(placeholderJugador1.innerHTML);