document.querySelectorAll('.show-answer').forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.style.display === "none") {
            answer.style.display = "block";
            this.textContent = "Ocultar Respuesta";
        } else {
            answer.style.display = "none";
            this.textContent = "Mostrar Respuesta";
        }
    });
});
