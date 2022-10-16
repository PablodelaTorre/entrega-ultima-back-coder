import localStorage from "localstorage"

export function destruirSesion(res){
    localStorage.removeItem("token")
}
