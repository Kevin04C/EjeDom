export default function hamburgerMenu(panelBoton, panel, menuLink) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(panelBoton) || e.target.matches(`${panelBoton} *`)) {
      document.querySelector(panel).classList.toggle("is-active");
      document.querySelector(panelBoton).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      document.querySelector(panel).classList.remove("is-active");
      
    }
  });
}
