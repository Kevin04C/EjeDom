export default function sorteo(btn, players) {
  const getWinner = (players) => {
    let $player = document.querySelectorAll([players]);
    let sorteo = Math.floor(Math.random() * $player.length);
    let resultado = $player[sorteo].textContent;

    return alert(`El ganador es ${resultado}`);
  };
  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      getWinner(players);
    }
  });
}


  
