
function validarTexto (texto) {
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
      
    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permiten Mayúsculas ni carácteres especiales");
        return true; 
    }else if(texto==vacio){
       alert("Ingresa un mensaje para encriptar");
        return true;
    }else{
        return false;
    }
}


let btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click",function ()  {
    let textInput = document.getElementById("text-input").value;
    let textoIngresado = textInput;
   
    if(validarTexto (textoIngresado) == false) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.getElementById("msj-encriptado");
        resultado.value = Encriptado;
    }else{        
        textInput = "";     
    }          
})

function defaultbox(){
    document.getElementById('toggle').style.display = 'block';
    document.getElementById('msj-encriptado').style.display = 'none';
}

function mostrarTexto() {
    document.getElementById('toggle').style.display = 'none';
    document.getElementById('msj-encriptado').style.display = 'block';
    document.getElementById('copied').style.display = 'none';
}

function textoCopiado(){
    document.getElementById('copied').style.display = 'block';
}

function encriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(obj,reglas[obj]);
        textoIngresado = Encriptado;        
    }
    mostrarTexto();
    return (Encriptado);
}

let btnCopiar = document.querySelector("#btn-copy");

btnCopiar.addEventListener("click",function(){        
    let Copiado = document.querySelector("#msj-encriptado").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#text-input").value="";
    textoCopiado();
    defaultbox();
});

const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

let btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function(){
    let textoIngresado = document.querySelector("#text-input").value;
    let Desencriptado = desencriptar(textoIngresado);
    let resultado = document.querySelector("#msj-encriptado");
    resultado.value = Desencriptado;
})

function desencriptar (textoIngresado) {
    let desencriptado = "";
    for (const obj in reglas) {
        desencriptado = textoIngresado.replaceAll(reglas[obj],obj);
        textoIngresado = desencriptado;
    }
    mostrarTexto();
    return (desencriptado);
}