"use strict"
/*FUNCION QUE HACE EL EFECTO DE DIFUNDIDO EN LA PANTALLA PRINCIPAL*/ 
function mostrarPaginaPrincipal() {
  var bienvenida = document.getElementById("bienvenida");
  var principal = document.getElementById("principal");

  bienvenida.style.opacity = 0;
  bienvenida.style.display = "none";
  principal.style.display = "block";

  setTimeout(function() {
    principal.style.opacity = 1;
    setTimeout(function() {
      bienvenida.style.display = "none";
    }, 500);
  }, 5000); 
}


/*
ME SIRVE PARA CAMBIAR EL NAVAR EN LOS DIFERENTES TIPOS DE PANTALLA
Y QUE ME HAGA EL SCROLL EN LOS DIFERENTES TIPOS DE PANTALLA
*/ 
document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');

    function scrollToNavbar() {
      navbar.scrollIntoView({ behavior: 'smooth' });
    }

    document.addEventListener('scroll', function() {
      var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
      if (scrollPos === 0) {
        navbar.style.position = 'static';
      } else {
        navbar.style.position = 'fixed';
      }
    });
    var image = document.querySelector('img');
    image.addEventListener('click', scrollToNavbar);
  });


/*ESTA FUNCION SIRVE PARA VALIDAR MI FORMULARIO 
Y ME SALTE EL ALERT QUE HE PUESTO UNA VEZ ESTE TODOS LOS
CAMPOS CORRECTOS, ADEMAS, HACE LA FUNCION DE LA BARRA DE PROGRESO
SEGUN SE ESTEN RELLENANDO LOS CAMPOS*/

  const form = document.getElementById('miFormulario');
  const progressBar = document.querySelector('.progress-bar');

  form.addEventListener('input', () => {
    const fields = form.querySelectorAll('input, textarea, select');
    let filledCount = 0;
    fields.forEach(field => {
      if (field.checkValidity()) {
        filledCount += 1;
      }
    });
    const progress = (filledCount / fields.length) * 100;
    progressBar.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', progress);
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (form.checkValidity()) {
      var alerta = document.createElement("div");
      alerta.classList.add("alert", "alert-dark");
      alerta.setAttribute("role", "alert");
      alerta.innerHTML = `
        <h4 class="alert-heading">Correo enviado con éxito. ¡Gracias por su mensaje!</h4>
        <p>Si tiene alguna otra duda o consulta, no dude en enviarnos otro correo.</p>
        <hr>
        <p class="mb-0">¡Muchas gracias!</p>
      `;

      var formulario = document.getElementById("miFormulario");
      formulario.parentNode.insertBefore(alerta, formulario.nextSibling);
      formulario.reset(); // Reinicia el formulario
      progressBar.style.width = '0%';
      progressBar.setAttribute('aria-valuenow', 0);
    } else {
      form.classList.add('was-validated');
    }

    return false;
  });
