import countdown from "./cuenta_regresiva.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import scrollTopButtom from "./btn_scroll.js";
import darkMode from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./responsive_tester.js";
import userDevaiceInfo from "./deteccion_dispositivos.js";
import deteccionConexion from "./deteccion_conexion.js";
import Webcam from "./detecion_webcam.js";
import getGeolocation from "./gecalizacion.js";
import searchFilter from "./filtro_busquedas.js";
import sorteo from "./sorteo_digital.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import videoInteligente from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speech from "./speech.js";

document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "April 12, 2022 00:59:59",
    "Happy birthday teacher🎁❤️!!"
  );
  scrollTopButtom(".scroll-top");
  responsiveMedia(
    "youtube",
    "(min-width : 320px) and (max-width : 480px)",
    `    <a href="https://youtu.be/6NKZ7mscEyY" target="_BLANK">Ver Video</a>
  `,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6NKZ7mscEyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:320px) and (max-width:480px)",
    `<a href="https://goo.gl/maps/gCcRnk9vipK9pnQa9" target="_BLANK">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18941.40021925654!2d-80.48944224489279!3d-3.6014723781933182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9033f35d5166a63d%3A0x31b2993a8a0b642f!2sCorrales%2024501!5e0!3m2!1ses-419!2spe!4v1640665675121!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDevaiceInfo("user-device");
  Webcam("webcam");
  getGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
  sorteo("#btn_sorteo", ".player");
  slider();
  scrollSpy();
  videoInteligente();
  contactFormValidations();
});

document.addEventListener("keypress", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
deteccionConexion();
darkMode(".container-moon", "dark-mode");
speech();
