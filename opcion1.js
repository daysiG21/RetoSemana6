var boton = document.getElementById("btnAdd");
var texto = document.getElementById("txtTexto");
var arreglo=[];
boton.addEventListener('click',function(){
    arreglo.push(texto.value);
    texto.value="";
    console.log(arreglo);
})