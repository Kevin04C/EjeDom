export default function countdown(id, limitDate, finalMessage) {
  const divCountdown = document.getElementById(id);
  const countdownDate = new Date(limitDate).getTime();

  setInterval(() => {
    let now = new Date().getTime();
    let limitTime = countdownDate - now;
    //Convetimos el tiempo de la variable (limitTime) a dias
    let day = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    //Las horas la sacamos usando el "%" y lo dividimos para sacar las horas
    let hours = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2);
    let minutes = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2);
    let seconds = (
      "0" + Math.floor((limitTime % (1000 * 60)) / (1000))
    ).slice(-2);

    divCountdown.innerHTML = `<h3> Faltan: ${day} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;
    if (limitTime < 0) {
      divCountdown.innerHTML = `<h3>${finalMessage}</h3>`
    }
  }, 1000);
}
