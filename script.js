function expandirImagen(imagen) {
    const divExpandido = document.createElement("div");
    divExpandido.classList.add("imagen-expandida");
    divExpandido.onclick = function () {
        divExpandido.remove(); 
    };


    const imgExpandida = document.createElement("img");
    imgExpandida.src = imagen.src;
    divExpandido.appendChild(imgExpandida);

    document.body.appendChild(divExpandido);
}