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


//js adicional!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Capturar elementos
const mate = document.getElementById('mate');
const lengua = document.getElementById('lengua');
const efsi = document.getElementById('efsi');
const btnPromedio = document.getElementById('btnPromedio');
const btnMayor = document.getElementById('btnMayor');
const resultado = document.getElementById('resultado');
const imagen = document.getElementById('imagen');

// Validación en tiempo real
[mate, lengua, efsi].forEach(input => {
  input.addEventListener('keyup', () => {
    validarNota(input);
  });
});

function validarNota(input) {
  let valor = parseInt(input.value);
  if (isNaN(valor) || valor < 1 || valor > 10) {
    input.style.borderColor = 'red';
  } else {
    input.style.borderColor = 'green';
  }
}

// Calcular promedio
btnPromedio.addEventListener('click', () => {
  if (!mate.value || !lengua.value || !efsi.value) {
    alert('Completar todos los campos');
    return;
  }

  let n1 = parseInt(mate.value);
  let n2 = parseInt(lengua.value);
  let n3 = parseInt(efsi.value);

  if ([n1, n2, n3].some(nota => isNaN(nota) || nota < 1 || nota > 10)) {
    alert('Todas las notas deben ser números entre 1 y 10');
    return;
  }

  let promedio = (n1 + n2 + n3) / 3;
  resultado.innerHTML = `Promedio: ${promedio.toFixed(2)}`;

  if (promedio >= 6) {
    resultado.style.color = 'green';
    imagen.src = 'aprobado.gif';
  } else {
    resultado.style.color = 'red';
    imagen.src = 'reprobado.gif';
  }
});

// Mostrar materia con mejor nota
btnMayor.addEventListener('click', () => {
  if (!mate.value || !lengua.value || !efsi.value) {
    alert('Completar todos los campos');
    return;
  }

  let n1 = parseInt(mate.value);
  let n2 = parseInt(lengua.value);
  let n3 = parseInt(efsi.value);

  let mayor = Math.max(n1, n2, n3);
  let materias = [];

  if (n1 === mayor) materias.push('Matemática');
  if (n2 === mayor) materias.push('Lengua');
  if (n3 === mayor) materias.push('EFSI');

  resultado.innerHTML = `Mejor Nota: ${materias.join(', ')}`;
  resultado.style.color = 'blue';
  imagen.src = 'mejor.gif';
});
