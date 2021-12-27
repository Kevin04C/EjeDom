let x = 0;
let y = 0;
export function moveBall(e, ball, stage) {
  const $ball = document.querySelector(ball);
  const $stage = document.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();
  switch (e.keyCode) {
    case 97:
      // Izquierda
      if (limitsBall.left > limitsStage.left) {
        x--;
      }
      break;
    case 119:
      // Arriba
      if (limitsBall.top > limitsStage.top) {
        y--;
      }
      break;
    case 100:
      // Derecha
      if (limitsBall.right < limitsStage.right) {
        x++;
      }
      break;
    case 115:
      // Abajo
      if (limitsBall.bottom < limitsStage.bottom) {
        y++;
      }
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  if (e.altKey && (e.key === "n" || e.key === "N")) {
    alert('Usteded ha abierto una alerta con "ALT + N"');
  }
  if (e.altKey && (e.key === "b" || e.key === "B")) {
    confirm('Usteded ha abierto una CONFIRM con "ALT + B"');
  }
}
