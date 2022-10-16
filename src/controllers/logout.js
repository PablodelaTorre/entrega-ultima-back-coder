import localStorage from "localstorage"

export function destruirSesion(){
    localStorage.removeItem("token")
    res.render("./partials/login")
}
