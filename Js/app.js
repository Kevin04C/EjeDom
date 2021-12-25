import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import {shortcuts, moveBall} from "./teclado.js";

let body = document.querySelector('.body');
let btnDark = document.getElementById('btnDark'); 

document.addEventListener('DOMContentLoaded',(e)=>{
    hamburgerMenu('.panel-btn','.panel', '.menu a');
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    
});


btnDark.addEventListener('click',(e)=>{
    body.classList.toggle('background-active');
    
})

document.addEventListener('keydown',(e)=>{
    shortcuts(e);
    moveBall(e,'.ball','.stage');
})






