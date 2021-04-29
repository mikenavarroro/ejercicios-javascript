function validar() {
    var valor, text;
    valor = document.getElementById("numero").value;
    if(isNaN(valor) || valor < 1 || valor > 10) {
        text = "No es peque&ntilde;o!";
    } else {
        text = "Muy bien!";
    }
    document.getElementById("mensaje").innerHTML = text;
}

function cambiarColor(){
    var colorDeFondo;

    colorDeFondo = document.getElementById("colorfondo").value;

    if(colorDeFondo == "red"){
        window.alert("Sabía que era tu color favorito")
    }

    document.getElementById("cuerpo").style.backgroundColor = colorDeFondo;

}
