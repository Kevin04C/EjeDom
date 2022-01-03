export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;
  document.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        document.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      document.querySelector(btnPlay).disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      e.target.disabled = false;
      document.querySelector(clock).innerHTML = null;
      document.querySelector(btnPlay).disabled = false;
    }
  });
}
export function alarm(sound, btnPlay, btnStop) {
  let alarmatempo;
  let alarm = document.createElement("audio");
  alarm.src = sound;
  document.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmatempo = setTimeout(() => {
        alarm.play();
      }, 2000);
      document.querySelector(btnPlay).disabled = true;
    }
    if (e.target.matches(btnStop)) {
      alarm.pause();
      alarm.currentTime = 0;
      document.querySelector(btnPlay).disabled = false;
    }
  });
}
