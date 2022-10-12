class Jugador {
    constructor(nombre, puntos, humano) {
      this.nombre = nombre;
      this.puntos = puntos;
      this.humano = humano;
    }
  }
  


// -------------------------------Nombres Jugadores------------------------------

let inputNombre1 = document.getElementById("input-jugador-1");
let placeholderJugador1 = document.getElementById("header-jugador1");
let inputNombre2 = document.getElementById("input-jugador-2");
let placeholderJugador2 = document.getElementById("header-jugador2");



    // Añadir objeto jugador 1 y 2

            // Jugador 1



let añadirNombreJugador1 = document.getElementById("boton-input-jugador-1").addEventListener("click",  ()=>{
 
    
    nombreJugador1 = inputNombre1.value;
    inputNombre1.value = "";

    // SessionStorage

        sessionStorage.setItem("jugador1", nombreJugador1);
        placeholderJugador1.innerHTML = sessionStorage.getItem("jugador1");

        let objectJugador1 = new Jugador(nombreJugador1,0,radioHumanoJugador1.checked);
        let objectJugador1JSON = JSON.stringify(objectJugador1);
        sessionStorage.setItem("jugador1Object",objectJugador1JSON);
        let objectJugador1DesJSON = sessionStorage.getItem("jugador1Object");
        let objectJugador1Clean = JSON.parse(objectJugador1DesJSON);
    


    // Easter egg
    
        if(nombreJugador1 == "Joan Macarra"){
        sessionStorage.setItem("ganador", sessionStorage.getItem("jugador1"))
        sessionStorage.setItem("puntosGanador", 999999999999999)
        location.href="../pages/winner.html"
    }

})



placeholderJugador1.innerHTML = sessionStorage.getItem("jugador1");

        // Jugador 2



let añadirNombreJugador2 = document.getElementById("boton-input-jugador-2").addEventListener("click",  ()=>{

    nombreJugador2 = inputNombre2.value;
    inputNombre2.value = "";

    // SessionStorage

    sessionStorage.setItem("jugador2", nombreJugador2);
    placeholderJugador2.innerHTML = sessionStorage.getItem("jugador2");

    let objectJugador2 = new Jugador(nombreJugador2,0,radioHumanoJugador2.checked);
    let objectJugador2JSON = JSON.stringify(objectJugador2);
    sessionStorage.setItem("jugador2Object",objectJugador2JSON);
    let objectJugador2DesJSON = sessionStorage.getItem("jugador2Object");
    let objectJugador2Clean = JSON.parse(objectJugador2DesJSON);

})

placeholderJugador2.innerHTML = sessionStorage.getItem("jugador2");

// Radios


let radioHumanoJugador1 = document.getElementById("radioJugador1-humano");
let radioHumanoJugador2 = document.getElementById("radioJugador2-humano");

(radioHumanoJugador1).checked?console.log("Humano"):console.log("Robot");
(radioHumanoJugador2).checked?console.log("Humano"):console.log("Robot");


const elegirRadioJugador1 =()=>{
(radioHumanoJugador1).checked?console.log("Humano"):console.log("Robot");
}
const elegirRadioJugador2 =()=>{
(radioHumanoJugador2).checked?console.log("Humano"):console.log("Robot");
}