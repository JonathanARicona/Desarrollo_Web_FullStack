let usuario = "";
let visitas = 0;

function IdentificarUsuario(){
    let usuario = prompt("Ingrese su nombre para identificarse:");
    localStorage.setItem("usuario", usuario);
    let nombreAlmacenado = localStorage.getItem("usuario");
    if (usuario === null || usuario === "" || usuario === undefined) {
        while (usuario == "" || usuario == null || usuario === undefined) {
            alert("Vuelva a ingresar su nombre");
            usuario = prompt("Ingrese su nombre para identificarse:");
            localStorage.setItem(usuario, usuario);
            title = document.getElementById("registro");
        title.innerHTML =  `<p class="registroUser nav_contenedor" id="registro" ><button id="btn">Bienvenido/a: </button></p>`
            nombreAlmacenado = localStorage.getItem("usuario");
            document.querySelector("#btn").innerHTML = "Bienvenido: " + nombreAlmacenado;
        }
    } else {
        title = document.getElementById("registro");
        title.innerHTML =  `<p class="registroUser nav_contenedor" id="registro" ><button id="btn">Bienvenido/a: </button></p>`
        nombreAlmacenado = localStorage.getItem("usuario");
        document.querySelector("#btn").innerHTML = "Bienvenido: " + nombreAlmacenado;
    }
} 
function contador(){

    let contador = localStorage.getItem("contador");
    contador++;
    localStorage.setItem("contador", contador);
    document.querySelector("#contador").innerHTML = "Visitas: " + contador;
}
contador()
const btn = document.querySelector("button");
const registro = document.querySelector("#registro"); 
registro.addEventListener("click", IdentificarUsuario);

function nombreInicio(){
    nombreAlmacenado = localStorage.getItem("usuario");
    console.log(nombreAlmacenado);
    if (nombreAlmacenado === null || nombreAlmacenado === "" || nombreAlmacenado === undefined){
        registro.addEventListener("click", IdentificarUsuario);

    }else
    title = document.getElementById("registro");
        title.innerHTML =  `<p class="registroUser nav_contenedor" id="registro" ><button id="btn">Bienvenido/a: </button></p>`
    nombreAlmacenado = localStorage.getItem("usuario");
    document.querySelector("#btn").innerHTML = "Bienvenido: " + nombreAlmacenado;
}
nombreInicio()
