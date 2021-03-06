export default function Webcam(id) {
  const $video = document.getElementById(id);

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: { width: { ideal: 600 }, height: { ideal: 500 } },
      })
      .then((stream) => {
        $video.srcObject = stream;
        $video.play();
        console.log(stream);
      })
      .catch((e) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p> <mark>Sucedio el siguiente error ${e}</mark></p>`
        );
        console.log(`¡Error! ${e}`);
      });
  }
}

