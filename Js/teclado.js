let x = 0;
let y = 0;
export function moveBall(e, ball, stage) {
  const $ball = document.querySelector(ball);
  const $stage = document.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();
  switch (e.keyCode) {
    case 37:
      // Izquierda
      if (limitsBall.left > limitsStage.left) {
        x--;
      }
      e.preventDefault();
      break;
    case 38:
      // Arriba
      if (limitsBall.top > limitsStage.top) {
        y--;
      }
      e.preventDefault();
      break;
    case 39:
      // Derecha
      if (limitsBall.right < limitsStage.right) {
        x++;
      }
      e.preventDefault();
      break;
    case 40:
      // Abajo
      if (limitsBall.bottom < limitsStage.bottom) {
        y++;
      }
      e.preventDefault();
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
