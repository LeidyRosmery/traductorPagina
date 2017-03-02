function traducir (){
  var titulo= document.getElementById("form-signin-heading");
  var email= document.getElementById("inputEmail");
  var pass= document.getElementById("inputPassword");
  var recordar = document.getElementsByTagName("span")[0];
  var boton= document. getElementsByClassName("btn")[0];

  titulo.innerHTML= "Por favor inicia sesion";
  email.placeholder= "Correo Electronico";
  pass.placeholder= "Contraseña";
  recordar.innerHTML="Recordar datos";
  boton.innerHTML="Iniciar Sesion";
}
function imprimir(){
  var email=document.getElementById("inputEmail").value;
  var pass=document.getElementById("inputPassword").value;
  var mostrar=document.getElementById("mostrar");
  mostrar.innerHTML= "Tu email es : </br>" + email + "</br >Tu contraseña es : </br>"+ pass ;
}

traducir();
