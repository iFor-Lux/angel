function mostrarModal(imagenSrc, titulo, texto, subtitulo, minisubtitulo, texto2, minisubtitulo2, texto3, minisubtitulo3, texto4, minisubtitulo4, texto5) {
    var modal = document.getElementById('modal');
    var modalImagen = document.getElementById('modal-imagen');
    var modalTexto = document.getElementById('modal-texto');

    modalImagen.src = imagenSrc;
    modalTexto.innerHTML = `
        <h2>${titulo}</h2>
        <p>${texto}</p>
        <h2>${subtitulo}</h2>
        <h4>${minisubtitulo}</h4>
        <p>${texto2}</p>
        <h4>${minisubtitulo2}</h4>
        <p>${texto3}</p>
        <h4>${minisubtitulo3}</h4>
        <p>${texto4}</p>
        <h4>${minisubtitulo4}</h4>
        <p>${texto5}</p>
    `;

    modal.style.display = "block";
}

function cerrarModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
}
