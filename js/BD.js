window.onload = inicializar;
var formulario;
function inicializar(){
formulario =document.getElementById("autentica");
formulario.addEventListener("submit", autenticar, false);

}

function autenticar(event){
  event.preventDefault();
  var usuario = event.target.email.value;
  var password = event.target.password.value;

  firebase.auth().signInWithEmailAndPassword(usuario, password)
  .then(function(result){
window.location.href = "index2.html";
  })
  
  
  .catch(function(error) {
   $("#myModal").modal();
    // ...
  });

  

}

