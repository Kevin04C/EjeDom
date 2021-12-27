export default function darkMode(btn, classDark) {
  const $btn = document.querySelector(btn);
  const $selectors = document.querySelectorAll("[data-dark]");
  let moon = "🌙";
  let sun = "☀️";
  console.log($btn.textContent);
  console.log($btn.textContent === moon);

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($btn.textContent === moon) {
        $selectors.forEach((element) => {
          element.classList.add(classDark);
          $btn.innerHTML = sun;
        });
      } else {
        $selectors.forEach((element) => {
          element.classList.remove(classDark);
          $btn.innerHTML = moon;
        });
      }
    }
  });
}
