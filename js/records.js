let placeholderJugador1 = document.getElementById("records-jugador1");
let placeholderJugador2 = document.getElementById("records-jugador2");
let puntosJugador1 = document.getElementById("puntos-jugador1");
let puntosJugador2 = document.getElementById("puntos-jugador2");

placeholderJugador1.innerHTML = sessionStorage.getItem("jugador1");
placeholderJugador2.innerHTML = sessionStorage.getItem("jugador2");

let puntos1 = 0;
let puntos2 = 0;
puntos1 += parseInt(sessionStorage.getItem("puntosGanadorJ1"))
puntos2 += parseInt(sessionStorage.getItem("puntosGanadorJ2"))

puntosJugador1.innerHTML = puntos1
puntosJugador2.innerHTML = puntos2