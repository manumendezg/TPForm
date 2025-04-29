function validarNombre(){
    nombre = document.getElementById("nombre").value;
    const CANTMINLETRAS = 3;

    if(nombre.length >= CANTMINLETRAS){
        document.getElementById("errornombre").textContent="";
     return true;
    } else{
        document.getElementById("errornombre").textContent="3 caracteres mínimo.";
      return false;
    }
}

function validarEmail(){
    email = document.getElementById("email").value;

if(email.includes('@')){
    document.getElementById("erroremail").textContent="";
    return true;
} else{
    document.getElementById("erroremail").textContent="Tiene que tener el formato correcto.";
      return false;
}
}

function validarContra(){
    contra = document.getElementById("contra").value;

if(contra.length >= 8 && /[0-9]/.test(contra) && /[a-zA-Z]/.test(contra)){
    document.getElementById("errorcontra").textContent="";
    return true;
} else{
    document.getElementById("errorcontra").textContent="Tiene que tener mínimo 8 caracteres. Tiene que incluir una letra y un número por lo menos.";
      return false;
}

}
function validarContra2(){
    contra = document.getElementById("contra").value;
    contra2 = document.getElementById("contra2").value;

if(contra === contra2){
    document.getElementById("errorcontra2").textContent="";
    return true;
} else{
    document.getElementById("errorcontra2").textContent="Las contraseñas no coinciden.";
      return false;
}
}

function validarForm(event){
    
event.preventDefault();

if(validarNombre() && validarEmail() && validarContra() && validarContra2()){
alert("El formulario fue enviado con éxito.")
document.getElementById("formulario").submit();

} else{
    alert("Validar todos los campos antes de enviar el formulario");
    return;
}


}

