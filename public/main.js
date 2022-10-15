const socket = io()

const inputMail = document.getElementById("mail")
const inputName = document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")
const inputEdad = document.getElementById("edad")
const inputMensaje = document.getElementById("mensaje")
const mostrarMensajes = document.getElementById("nuevosMensajes")
const buttonMensajes = document.getElementById("buttonMensajes")

buttonMensajes.addEventListener('click',(e) => {

    if(inputMensaje.value.length > 0){
        let date = new Date()
        const fecha = [date.getDay(),date.getMonth(),date.getFullYear(),date.getHours(),date.getMinutes(),date.getSeconds()]
        const mail = inputMail.value
        const nombre = inputName.value
        const apellido = inputApellido.value
        const edad = inputEdad.value
        const texto = inputMensaje.value
        const mensaje = {
            mail: mail,
            texto: texto,
            fecha:fecha,
            autores:{
                nombre: nombre,
                apellido: apellido,
                edad: edad,
                id:mail
            }
        }
        console.log(fecha)
        console.log(mensaje)
        socket.emit("newMessage",mensaje)  
    }   
})


socket.on('productos', (productos) => {
    tablaProducts.innerHTML = productos.map(p => {
        return(
            `   
                <tr class="filas">
                    <th class="columnas">${p.titulo}</th>
                    <th class="columnas">${p.precio}</th>
                    <th class="columnas">${p.foto}</th>
                </tr>
            `
    )
    }).join(" ")
})

socket.on('mensajes', (mensajes) => {
    mostrarMensajes.innerHTML = mensajes.map(m => {
        return (
            `
                <div class="fondoMensaje">
                    <strong class="mail">${m.mail}</strong>
                    <strong class="fecha">${m.fecha.join("/")}</strong>
                    <em class="mensaje">${m.texto}</em>
                </div>
            `
        )
    })
})