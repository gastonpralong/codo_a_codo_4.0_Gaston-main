document.addEventListener('DOMContentLoaded', function() {
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');

    nombre.addEventListener('input', function() {
        if (this.value.length > 20) {
            this.value = this.value.slice(0, 20);
        }
    });

    apellido.addEventListener('input', function() {
        if (this.value.length > 20) {
            this.value = this.value.slice(0, 20);
        }
    });
});

function mostrarAlerta() {
    alert("¡Gracias por visitarnos! Pronto recibirás más información.");
}

function validarFormulario(event) {
    event.preventDefault();  
    
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var pais = document.getElementById('pais').value;
    var frecuencia = document.querySelector('input[name="frecuencia"]:checked');

    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }

    if (apellido === "") {
        alert("Por favor, ingrese su apellido.");
        return false;
    }

    if (email === "") {
        alert("Por favor, ingrese su correo electrónico.");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|yahoo)\.com$/;
    if (!emailPattern.test(email)) {
        alert("El correo electrónico debe ser de los siguientes dominios: gmail.com, hotmail.com, outlook.com, yahoo.com.");
        return false;
    }

    if (pais === "") {
        alert("Por favor, seleccione su país.");
        return false;
    }

    if (frecuencia === null) {
        alert("Por favor, seleccione la frecuencia de envío.");
        return false;
    }

    return true;

}