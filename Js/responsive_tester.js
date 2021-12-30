export default function responsiveTester(form) {
  const $form = document.getElementById(form);
  let tester;
  document.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = window.open($form.direccion.value);
    }
  });
  document.addEventListener("click", (e) => {
    if (e.target === $form.btn_cerrar) {
        tester.close();
    }
  });
}
