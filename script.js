const spinButton = document.getElementById("spin-button");
const result = document.getElementById("result");
let arrayNumeros = [];

let intervalId; // ID del intervalo para el contador
let counter = 0; // contador
const timeLimit = 10; // tiempo límite en segundos

function spin() {
  // Generar un número aleatorio entre 0 y 36
  const randomNumber = Math.floor(Math.random() * 37);
  
  // Cambiar el color del resultado según el número generado
  if (randomNumber === 0) {
    result.style.color = "green";
  } else if (randomNumber >= 1 && randomNumber <= 10) {
    if (randomNumber % 2 === 0) {
      result.style.color = "black";
    } else {
      result.style.color = "red";
    }
  } else if (randomNumber >= 11 && randomNumber <= 18) {
    if (randomNumber % 2 === 0) {
      result.style.color = "red";
    } else {
      result.style.color = "black";
    }
  } else if (randomNumber >= 19 && randomNumber <= 28) {
    if (randomNumber % 2 === 0) {
      result.style.color = "black";
    } else {
      result.style.color = "red";
    }
  } else if (randomNumber >= 29 && randomNumber <= 36) {
    if (randomNumber % 2 === 0) {
      result.style.color = "red";
    } else {
      result.style.color = "black";
    }
  }
  
  // Mostrar el número en el resultado
  result.textContent = randomNumber;

  // Comprobar si el número generado coincide con uno de los números seleccionados
  comprobarNumeros(arrayNumeros);
}

function startCounter() {
  // Iniciar el contador
  intervalId = setInterval(() => {
    counter++; // aumentar el contador
    if (counter === timeLimit) {
      spin(); // generar un número aleatorio
      counter = 0; // reiniciar el contador
    }
  }, 1000);
}

function stopCounter() {
  // Detener el contador
  clearInterval(intervalId);
  counter = 0; // reiniciar el contador
}

spinButton.addEventListener("click", () => {
  startCounter();
});

// Cuando se haga click en una celda de la tabla, se guarda el número
// seleccionado en el array "arrayNumeros"
const celdas = document.getElementsByTagName("td");
for (let i = 0; i < celdas.length; i++) {
  celdas[i].addEventListener("click", (event) => {
    arrayNumeros.push(event.target.textContent);
    event.target.style.border = "1px solid blue";
    event.target.style.opacity = 0.5;
  });
}

function comprobarNumeros(arr){
  if(arr.includes(document.getElementById("result").textContent)){
      alert("ENHORABUENA")
  }
}


// APUESTAS:
