const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn4 = document.querySelector('#btn4');

const form2 = document.querySelector('#form2');
const form3 = document.querySelector('#form3');
const form4 = document.querySelector('#form4');
/* const claveAcceso = document.querySelector("#claveAccceso"); */

/** Boton azul iniciar sesión */
btn1.addEventListener('click', e =>{

  form2.style.display = "block";
  form3.style.display = "none"
  parrafoGeneraProgramacion.style.display = "none";
  btn2.style.display = "none";
  /* parrafoGeneraProgramacion.style.display = "none"; */
  e.preventDefault();

});
/** */
btn2.addEventListener('click', e=>{

  form2.style.display = "none";
  form3.style.display = "block";
  e.preventDefault();

});
btn4.addEventListener('click', e=>{
  btn1.style.display = "none";
  form2.style.display = "none";
  form4.style.display = "block";
  e.preventDefault();

});

_claveAcceso.addEventListener("keyup", e =>{
  let string = e.target.value
  e.target.value = string.trim();
});

/* function calcularEdad(fecha_nacimiento) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha_nacimiento);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }
  return edad;
}

var edad = calcularEdad("2005/08/10");
if(edad >= 18){
  alert("Eres mayor de edad :D ");
}else{
  alert("Eres menor de edad :( ");
} */