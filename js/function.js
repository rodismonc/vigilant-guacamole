
/**
ocument.getElementById("boton").onclick = function () {
    console.log("Capturamos el evento")
    document.getElementById("demo").innerHTML = "Estamos probando";
}

document.addEventListener("click", function (){
    console.log("event listener")
})
*/
//todos los eventos en developer mozzilla
document.getElementById("boton").addEventListener("click", function (){
    console.log("event listener")
})