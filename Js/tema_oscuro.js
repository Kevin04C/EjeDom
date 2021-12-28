export default function darkMode(btn, classDark) {
  const $btn = document.querySelector(btn);
  const $selectors = document.querySelectorAll("[data-dark]");
  let moon = "🌙";
  let sun = "☀️";

  let darkMode = () => {
    $selectors.forEach((element) => {
      element.classList.add(classDark);
      $btn.innerHTML = sun;
      localStorage.setItem("theme", "dark")
    });
  };
  let lightMode = () => {
    $selectors.forEach((element) => {
      element.classList.remove(classDark);
      $btn.innerHTML = moon;
      localStorage.setItem("theme", "light")
    });
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($btn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });
  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "light");
        
    }
    if (localStorage.getItem("theme")==="light") {
      lightMode();
    }
    if (localStorage.getItem("theme")==="dark") {
      darkMode();
    }
    
  });
}
