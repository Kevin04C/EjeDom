import countdown from "../cuenta_regresiva.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import {shortcuts, moveBall} from "./teclado.js";
import scrollTopButtom from "./btn_scroll.js";

let body = document.querySelector('.body');
let btnDark = document.getElementById('btnDark'); 

document.addEventListener('DOMContentLoaded',(e)=>{
    hamburgerMenu('.panel-btn','.panel', '.menu a');
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","December 31, 2021 00:00:00","Feliz Año Nuevo 🎁❤️!!");
    scrollTopButtom(".scroll-top");
});


btnDark.addEventListener('click',(e)=>{
    body.classList.toggle('background-active');
    
});

document.addEventListener('keypress',(e)=>{
    shortcuts(e);
    moveBall(e,'.ball','.stage');
});










