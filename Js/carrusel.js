export default function slider() {
  const next = document.querySelector(".slider-btns .next");
  const prev = document.querySelector(".slider-btns .prev");
  const sliders = document.querySelectorAll(".slider-slide");
  let i = 0;
  document.addEventListener("click", (e) => {
    if (e.target === prev) {
      e.preventDefault();
      sliders[i].classList.remove("active");
      i--;
      if(i < 0){
          i = sliders.length-1; 
      }
      sliders[i].classList.add("active");
    }
    if (e.target === next) {
        e.preventDefault();
        sliders[i].classList.remove("active");
        i++;
        if(i >= sliders.length){
            i = 0; 
        }
        sliders[i].classList.add("active");
      }

    
  });
}
