//navegatior user.Agent nos devuelve una información en cadena de texto

export default function userDevaiceInfo(id) {
    const isMobile = {
        android :()=> navigator.userAgent.match(/android/i),
        ios : () => navigator.userAgent.match(/iphone|ipad|ipod/i),
        any : function(){
            return this.android() || this.ios();
        }
    }
    const isDesktop ={
        linux : ()=> navigator.userAgent.match(/linux/i),
        mac: ()=> navigator.userAgent.match(/mac os/i), 
        window : ()=> navigator.userAgent.match(/windows nt/i),
        any : function(){
            return this.linux() || this.mac() || this.window();
        }
    };
    console.log(isMobile.ios);
}