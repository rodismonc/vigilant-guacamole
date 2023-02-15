

document.getElementById("sumar").addEventListener("click", function(){
let numeroA = document.getElementById("numero1").value;
console.log("elvalor del numero A es:"+numeroA);
let numeroB = document.getElementById("numero2").value;
console.log("elvalor del numero B es:"+numeroB);
let resultado = sumar(parseInt(numeroA), parseInt(numeroB));
console.log("elvalor de la suma es:"+resultado);
document.getElementById("resultado").innerHTML = resultado;
document.getElementById("resultado").style.dislay = "block";
});
function sumar(a,b){
    return a+b;
}