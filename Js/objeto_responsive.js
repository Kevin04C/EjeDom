export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    if (window.matchMedia(mq).matches) {
        document.getElementById(id).innerHTML = mobileContent;
    } else {
        document.getElementById(id).innerHTML = desktopContent;
      }
}
