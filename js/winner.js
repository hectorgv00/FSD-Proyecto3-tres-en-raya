let winner = sessionStorage.getItem("ganador")

let muestraGanador = document.getElementById("winner");

let puntosWinner = document.getElementById("puntos-winner");

puntosWinner.innerHTML = sessionStorage.getItem("puntosGanador");

muestraGanador.innerHTML = winner;