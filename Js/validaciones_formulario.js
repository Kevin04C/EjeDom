export default function contactFormValidations() {
  const $form = document.querySelector(".contact-form");
  const $inputs = document.querySelectorAll(".contact-form [required]");
  $inputs.forEach((input) => {
    const $span = document.createElement("span");
    $span.textContent = input.title;
    $span.id = input.name;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let pattern = e.target.pattern || e.target.dataset.pattern;
      if (pattern) {
        let regex = new RegExp(pattern);
        return !regex.test(e.target.value)
          ? document.getElementById(e.target.name).classList.add("is-active")
          : document
              .getElementById(e.target.name)
              .classList.remove("is-active");
      }
      if (!pattern) {
          console.log(e.target.value === "");
        return e.target.value === ""
          ? document.getElementById(e.target.name).classList.add("is-active")
          : document
              .getElementById(e.target.name)
              .classList.remove("is-active");
      }
    }
  });
  document.addEventListener('submit',(e)=>{
      alert("Enviando formulario");
      const $loader = document.querySelector('.contac-form-loader');
      const $response = document.querySelector('.contact-form-response');
      $loader.classList.remove('none');
      setTimeout(() => {
          $loader.classList.add('none');
          $response.classList.remove('none');
          $form.reset();
          setTimeout(() => $response.classList.add('none'),3000);
      }, 3000);
      
  })
}
