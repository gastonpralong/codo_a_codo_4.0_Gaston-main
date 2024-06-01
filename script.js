function expandirImagen(imagen) {
    // Crea un elemento div para mostrar la imagen expandida
    const divExpandido = document.createElement("div");
    divExpandido.classList.add("imagen-expandida");
    divExpandido.onclick = function () {
        divExpandido.remove(); // Cierra la imagen al hacer clic fuera de ella
    };

    // Crea la imagen expandida
    const imgExpandida = document.createElement("img");
    imgExpandida.src = imagen.src;
    divExpandido.appendChild(imgExpandida);

    // Agrega el elemento al cuerpo del documento
    document.body.appendChild(divExpandido);
}