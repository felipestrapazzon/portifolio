document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");
    const elementsToBlur = document.querySelectorAll(".blur-effect");

    button.addEventListener("mouseenter", function() {
        elementsToBlur.forEach(element => {
            element.style.transition = "filter 0.3s"; /* Adiciona transição suave */
            element.style.filter = "blur(5px)";
        });
    });

    button.addEventListener("mouseleave", function() {
        elementsToBlur.forEach(element => {
            element.style.transition = "filter 0.3s"; /* Adiciona transição suave */
            element.style.filter = "blur(0px)";
        });
    });
});


