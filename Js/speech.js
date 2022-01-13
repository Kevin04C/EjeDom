export default function speech() {
  const $select = document.getElementById("select");
  const $text = document.getElementById("text");
  const $btn = document.getElementById("button-hablar");
  const speech = new SpeechSynthesisUtterance();
  let voices = [];
  document.addEventListener("DOMContentLoaded", (e) => {
    speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = window.speechSynthesis.getVoices();
      voices.forEach((voice) => {
        let $option = document.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} --- ${voice.lang}`;
        $select.appendChild($option);
      });
    });
  });
  document.addEventListener("change", (e) => {
    if (e.target === $select) {
      speech.voice = voices.find((voice) => {
        return voice.name === e.target.value
      });
    }
  });
  document.addEventListener("click", (e) => {
    if (e.target === $btn) {
      speech.text = $text.value;
      speechSynthesis.speak(speech);
    }
  });
}
