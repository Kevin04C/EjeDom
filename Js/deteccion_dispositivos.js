//navegatior user.Agent nos devuelve una información en cadena de texto

export default function userDevaiceInfo(id) {
  const isMobile = {
    android: () => navigator.userAgent.match(/android/i),
    ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
    any: function () {
      return this.android() || this.ios();
    }
  };
  const isDesktop = {
    linux: () => navigator.userAgent.match(/linux/i),
    mac: () => navigator.userAgent.match(/mac os/i),
    window: () => navigator.userAgent.match(/windows nt/i),
    any: function () {
      return this.linux()||this.mac()||this.window();
    }
  };

  const isBrowser = {
    chrome: () => navigator.userAgent.match(/chrome/i),
    safari: () => navigator.userAgent.match(/safari/i),
    firefox: () => navigator.userAgent.match(/firefox/i),
    opera: () => navigator.userAgent.match(/opera|opera mini/i),
    edge: () => navigator.userAgent.match(/edge/i),
    any: function () {
      return this.chrome()||this.safari()||this.firefox()||this.opera() ||this.edge();
    }
  };
  const $id = document.getElementById(id);
  $id.innerHTML = `
  <ul>
    <li>${navigator.userAgent}</li>
    <li>
    <h3>Dispositivo: < style="color: orange;"> ${isMobile.any()? isMobile.any() : isDesktop.any()}</h3>
    </li>
  </ul>
  `
}
