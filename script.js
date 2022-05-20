function calcular() {
    

    glicose = document.getElementById("medida").value;
    resultado = " ";

    if (glicose <= 100) {
        resultado = "Normal";
    } else if (glicose <= 140) {
        resultado = "Elevado"
    } else {
        resultado = "Diabetes";
    }

    classif.innerHTML = resultado;

}