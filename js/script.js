const botonInicioSesion = document.getElementById("btnInicia");
const formularioInicio = document.getElementById("formInicio");
const formularioInicioDatos = document.getElementById("formInicio-Datos");


botonInicioSesion.addEventListener('click', e =>
{
    /* formularioInicioDatos.style.display = "none";
    formularioInicio.style.display = "block"; */
    /* formInicio.style.display = "block"; */
    formularioInicio.style.display = "none";
    formularioInicioDatos.style.display = "block";
    
    /* formularioInicio.style.display = "block";
    formularioInicioDatos.style.display = "none"; */
    e.preventDefault();
})

