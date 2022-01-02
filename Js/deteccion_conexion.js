export default function deteccionConexion() {
    const $div = document.createElement("div");
    const isOnline = ()=>{
        if (navigator.onLine) {
            $div.textContent = "Conexion establecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Conexion perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        document.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(() => {
            document.body.removeChild($div);
        }, 2000);
    }
    isOnline();
}
