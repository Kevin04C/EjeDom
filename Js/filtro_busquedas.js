export default function searchFilter(input, selector) {
  let cards = document.querySelectorAll(selector);
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      cards.forEach((item) => {
        item.textContent.toLowerCase().includes(e.target.value)
          ? item.classList.remove("filter") 
          : item.classList.add("filter")
      });
    }
  });
}
