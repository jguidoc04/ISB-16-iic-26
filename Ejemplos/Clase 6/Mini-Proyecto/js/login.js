const $ = (id) => document.getElementById(id);
const formularioLogin = $("formLogin");
const mensajeLogin = $("mensajeLogin");

function llenarLocal() {
  const usuario = {
    usuario: "admin",
    contrasenna: "admin123",
    nombre: "Administrador",
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));
}
//llenarLocal()

formularioLogin.addEventListener("submit", function (event) {
  event.preventDefault();
  const datos = localStorage.getItem("usuario");
  const usuarioGuardado = JSON.parse(datos);
  const usuario = $("usuario").value;
  const contrasenna = $("contrasenna").value;


  if(usuario===usuarioGuardado.usuario 
    && contrasenna===usuarioGuardado.contrasenna){
    mensajeLogin.textContent = "Ha logueado";
    window.location.replace("canciones.html");

  }else{
    mensajeLogin.textContent = "Usuario o contraseña incorrectos"
  }

});
