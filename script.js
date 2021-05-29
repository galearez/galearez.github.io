const screens = document.querySelectorAll(".screen");
const screensLength = screens.length - 1;
let currentScreen = 0;

const btnSubir = document.querySelector(".BtnArriba");
const btnBajar = document.querySelector(".BtnAbajo");

const btnPantalla = document.querySelectorAll(".BtnPantalla");

/* function wheelScroll(e) {
  if (currentScreen > 0 && e.deltaY < 0) {
    currentScreen -= 1;
  } else if (currentScreen < screensLength && e.deltaY > 0) {
    currentScreen += 1;
  }
  screens[currentScreen].scrollIntoView({ behavior: "smooth" });
}
function screenUp() {
  if (currentScreen < screensLength) {
    currentScreen += 1;
  }
  screens[currentScreen].scrollIntoView({ behavior: "smooth" });
}
function screenDown() {
  if (currentScreen > 0) {
    currentScreen -= 1;
  }
  screens[currentScreen].scrollIntoView({ behavior: "smooth" });
} */

btnBajar.addEventListener("click", function () {
  if (currentScreen < screensLength) {
    currentScreen += 1;
  }
  screens[currentScreen].scrollIntoView({ behavior: "smooth" });
});

//Ya sé que esta función es una caca, pero de momento la voy a dejar por que tengo pereza, cuando
//vaya a terminar la página mi primera tarea será refactorizar esta función para we no sea un
//bucle infinito
window.setInterval(function () {
  btnSubir.classList.toggle("Mostrar", currentScreen != 0);
  btnBajar.classList.toggle("Mostrar", currentScreen < screensLength);
}, 500);

btnSubir.addEventListener("click", function () {
  if (currentScreen > 0) {
    currentScreen -= 1;
  }
  screens[currentScreen].scrollIntoView({ behavior: "smooth" });

  console.log(currentScreen);
});

// currentScreen === 1
//   ? btnSubir.classList.add("Mostrar")
//   : btnSubir.classList.remove(" Mostrar");

// currentScreen === screensLength
//   ? btnSubir.classList.remove(" Mostrar")
//   : btnSubir.classList.add("Mostrar");

window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowDown" && currentScreen < screensLength) {
    currentScreen += 1;
  }
  screens[currentScreen].scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp" && currentScreen > 0) {
    currentScreen -= 1;
  }
  screens[currentScreen].scrollIntoView({ behavior: "smooth" });
});

for (let i = 0, n = screensLength + 1; i < n; i++) {
  btnPantalla[i].addEventListener("click", function () {
    screens[i].scrollIntoView({ behavior: "smooth" });
    currentScreen = i;
  });
}

// function primeraPantalla(bool) {
//   if (!bool) {
//     btnSubir.classList.toggle("Mostrar", currentScreen != 0);
//   } else {
//     btnSubir.classList.remove(" Mostrar");
//   }
// }
// function ultimaPantalla(bool) {
//   if (!bool) {
//     btnBajar.classList.toggle("Mostrar", currentScreen < screensLength);
//   } else {
//     btnBajar.classList.remove(" Mostrar");
//   }
// }

/*  0 no hay boton de subir
    >= 1 hay boton de subir

    <= n - 1 hay boton de bajar
    n no hay boton de bajar  */

let scrolling = 1; // this variable will hold the previous value, since we land on 0 value the user can only scroll down
let scrollingDirection = 0; // this variable will hold the
let scrollingTo = 0;
window.addEventListener("wheel", function (event) {
  let isScrollingDown = Math.sign(event.deltaY);

  if (isScrollingDown != scrolling) {
    prueba(isScrollingDown);
    scrolling = isScrollingDown;
  }
});

function prueba(b) {
  if (currentScreen > 0 && b < 0) {
    currentScreen -= 1;
  } else if (currentScreen < screensLength && b > 0) {
    currentScreen += 1;
  }
  screens[currentScreen].scrollIntoView({ behavior: "smooth" });
}

// Creo que la solución es la siguiente, crear una condición que compare antes de ejecutar la función
// utilizamos la variable isScrollingDown, esa variable será global, su valor se asignará dinamicamente
// si el valor nuevo valor de isScrollingDown es diferente al anterior, no se ejucuta nada y se sale
// si es diferente si ejecuta, de esa forma solo la ejecutamos una vez

// window.addEventListener("wheel", function (event) {
//   if (currentScreen > 0 && event.deltaY < 0) {
//     currentScreen -= 1;
//   } else if (currentScreen < screensLength && event.deltaY > 0) {
//     currentScreen += 1;
//   }
//   screens[currentScreen].scrollIntoView({ behavior: "smooth" });
// });

// window.addEventListener("scroll", function (event) {
//   if (currentScreen > 0 && event.deltaY < 0) {
//     currentScreen -= 1;
//   } else if (currentScreen < screensLength && event.deltaY > 0) {
//     currentScreen += 1;
//   }
//   screens[currentScreen].scrollIntoView({ behavior: "smooth" });
// });
