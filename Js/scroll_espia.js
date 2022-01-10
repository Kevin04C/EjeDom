export default function scrollSpy() {
  const sections = document.querySelectorAll(".seccion[data-scroll-spy]");
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        let enlace = document.querySelector(
          `[href="#${entry.target.getAttribute("id")}"]`
        );
        enlace.classList.add("active");
      } else {
        let enlace = document.querySelector(
          `[href="#${entry.target.getAttribute("id")}"]`
        );
        enlace.classList.remove("active");
      }
    });
  };
  const options = {
    threshold: [0.5, 1],
  };
  const observer = new IntersectionObserver(callback, options);
  sections.forEach((element) => {
    observer.observe(element);
  });
}
