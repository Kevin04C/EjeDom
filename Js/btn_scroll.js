export default function scrollTopButton(buttom) {
  let btn = document.querySelector(buttom);
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 500) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
    }
  });
  document.addEventListener("click", (e) => {
    if (e.target.matches(buttom)) {
      window.scrollTo(0, 0);
    }
  });
}
