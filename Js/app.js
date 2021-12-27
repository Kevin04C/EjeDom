import countdown from "./cuenta_regresiva.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import scrollTopButtom from "./btn_scroll.js";
import darkMode from "./tema_oscuro.js";

document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "December 31, 2021 00:00:00",
    "Feliz Año Nuevo 🎁❤️!!"
  );
  scrollTopButtom(".scroll-top");
  darkMode(".container-moon","dark-mode");
});

document.addEventListener("keypress", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
let contI = document.querySelector('.moon'); 
let btnDark = document.getElementById("btnDark");
btnDark.addEventListener('click',(e)=>{
})