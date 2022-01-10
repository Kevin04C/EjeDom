export default function videoInteligente() {
  const videos = document.querySelectorAll("video[data-video-inteligente]");
  let callbaks = (entries, observer) => {
    entries.forEach((element) => {
      if (element.isIntersecting) {
        element.target.play();
        element.target.controls=true;
      } else {
        element.target.pause();
      }
      window.addEventListener('visibilitychange',(e)=>{
        document.visibilityState ? element.target.play() : element.target.pause(); 
      });
    });
  };
  const options = {
    threshold: [0.5, 1],
  };
  const observer = new IntersectionObserver(callbaks, options);
  videos.forEach((element) => {
    observer.observe(element);
  });
}
