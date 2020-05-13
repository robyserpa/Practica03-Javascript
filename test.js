
//calculadora

function init(){
    iniciarImagenes();
    //variables de la pagina
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');


    uno.onclick = function(e){
        resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        resultado.textContent = resultado.textContent  + "+";
    }
    resta.onclick = function(e){
        resultado.textContent = resultado.textContent  + "-";
    }
    multiplicacion.onclick = function(e){
        resultado.textContent = resultado.textContent  + "*";
    }
    division.onclick = function(e){
        resultado.textContent = resultado.textContent  + "/";
    }
    igual.onclick = function(e){
        resultado.textContent = eval(resultado.textContent);
    }
}

function resetear(){
    resultado.textContent = "";
}
//fin calculadora


//formulario
function validarCamposObligatorios() {
    var bandera = true 
    
    for(var i = 0; i < document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i];
        
        if(elemento.value == '' && elemento.type == 'text' ){
            elemento.style.border = '1px red solid';
            bandera = false;
        }
        if(elemento.value == '' && elemento.type == 'email' ){
            elemento.style.border = '1px red solid';
            bandera = false;
        }
        if(elemento.value == '' && elemento.type == 'password' ){
            elemento.style.border = '1px red solid';
            bandera = false;
        }
    } 
    
    if(!bandera){ 
        alert('Error: revisar los comentarios');
        document.getElementById('errorDatos').innerHTML 
        = 'Revise que todos los datos esten correctos';
        elemento.className = 'error'; 
    }
    return bandera 
}

function validarCedula(elemento) {
    if(elemento.value.length > 0 ){ 
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1);
        console.log(miAscii) 
        if(miAscii >= 48 && miAscii <= 57){ 
            var cad = document.getElementById("cedula").value.trim();
            var total = 0;
            var longitud = cad.length;
            var longcheck = longitud - 1;
            
            if(elemento.value.length == 10){
                for(i = 0; i < longcheck; i++){
                    if (i%2 === 0) {
                    var aux = cad.charAt(i) * 2;
                    if (aux > 9) aux -= 9;
                    total += aux;
                    } else {
                    total += parseInt(cad.charAt(i));
                    }
                }

                total = total % 10 ? 10 - total % 10 : 0;

                if (cad.charAt(longitud-1) == total) {
                    elemento.style.border = '1px #00ff00 solid';
                    return true;
                }else{
                    elemento.style.border = '2px red solid';
                    return false;
                }
            }else {
                elemento.style.border = '2px red solid';
                return false;
            }
        }else { 
            elemento.value = elemento.value.substring(0, elemento.value.length-1);
            elemento.style.border = '2px red solid'; 
            return false;
        } 
    }else{ 
        elemento.style.border = '2px red solid';
        return false;
    } 
}

function validarLetras(elemento) { 
    if(elemento.value.length > 0){ 
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1);
        // console.log(miAscii);
        if(miAscii >= 65 && miAscii <= 90 || miAscii >= 97 && miAscii <= 122 || miAscii == 32){ 
            var espacio = 0;
            var mayu = 0;
            var min = 0;
            var cad = elemento.value;
            console.log(cad)
            if(cad.charAt(0) == " ") espacio=2;
            if(cad.charCodeAt(0) >= 65 && cad.charCodeAt(0) <= 90) mayu++;
            if(cad.charCodeAt(1) >= 97 && cad.charCodeAt(1) <= 122) min++;
            for (i=0; i < cad.length; i++){                
                if(cad.charAt(i) == " "){
                    espacio++;
                    if(cad.charCodeAt(i+1) >= 65 && cad.charCodeAt(i+1) <= 90) mayu++;
                    if(cad.charCodeAt(i+2) >= 97 && cad.charCodeAt(i+2) <= 122) min++;
                } 
            }
            if( mayu == 2 && espacio == 1 && min > 1) {
                elemento.style.border = '1px #00ff00 solid';
                return true; 
            }else {
                elemento.style.border = '2px red solid'; 
                return false;
            }
        }else { 
            elemento.value = elemento.value.substring(0, elemento.value.length-1);
            elemento.style.border = '2px red solid'; 
            return false;
        } 
    }else{ 
        elemento.style.border = '2px red solid';
        return false;
    } 
}

function validarDireccion(elemento){
    if(elemento.value.length > 0 ){
        elemento.style.border = '1px black solid';
        return true;
    }else{
        elemento.style.border = '1px red solid';
        return false;
    }
}

function validarTelefono(elemento){ 
    if(elemento.value.length > 0){ 
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1);
        var tel = elemento.value;
        if(miAscii >= 48 && miAscii <= 57){ 
            if( elemento.value.length == 10 ) {
                elemento.style.border = '1px #00ff00 solid';
                return true;
            }else {
                elemento.style.border = '2px red solid'; 
                return false;
            }
        }else{
            elemento.value = elemento.value.substring(0, elemento.value.length-1);
            elemento.style.border = '2px red solid'; 
            return false;
        }
    }else{
        elemento.style.border = '2px red solid'; 
        return false;
    }
}

function validarFecha(elemento){
    if(elemento.value.length > 0){ 
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1);
        var fecha = elemento.value;
        var dia = 0;
        var mes = 0;
        var anio = 0;
        if(miAscii >= 48 && miAscii <= 57 || miAscii == 47){ 
            dia = fecha.substring(1,2);
            mes = fecha.substring(3,5);
            anio = fecha.substring(6,10);            
            if(dia<=31 && mes<=12 && anio > 1900 && anio < 2500 
                && elemento.value.length == 10
                && fecha.charAt(2) == "/" && fecha.charAt(5) == "/"){
                elemento.style.border = '1px #00ff00 solid';
                return true;
            }else{
                elemento.style.border = '2px red solid'; 
                return false;
            }
        }else{
            elemento.value = elemento.value.substring(0, elemento.value.length-1);
            elemento.style.border = '2px red solid'; 
            return false;
        }
    }else{
        elemento.style.border = '2px red solid'; 
        return false;
    }
}

function validarCorreo(elemento){
    if(elemento.value.length > 0){ 
        var correo = elemento.value;       
        if(correo.substring(correo.length-15,correo.length)=="@est.ups.edu.ec" 
            || correo.substring(correo.length-11,correo.length)=="@ups.edu.ec"){
            elemento.style.border = '1px #00ff00 solid';
            return true;
        }else{
            elemento.style.border = '2px red solid'; 
            return false;
        }
    }else{
        elemento.style.border = '2px red solid'; 
        return false;
    }
}

function validarPasword(elemento) { 
    if(elemento.value.length > 7){ 
        var especial = 0;
        var mayu = 0;
        var min = 0;
        var cad = elemento.value;
        console.log(cad)
        for (i=0; i < cad.length; i++){
            if(cad.charCodeAt(i) >= 65 && cad.charCodeAt(i) <= 90){
                mayu++;
            }else if(cad.charCodeAt(i) >= 97 && cad.charCodeAt(i) <= 122) {
                min++;
            }else{
                especial++;
            }
        }
        if( mayu >= 1 && especial >= 1 && min >= 1) {
            elemento.style.border = '1px #00ff00 solid';
            return true; 
        }else {
            elemento.style.border = '2px red solid'; 
            return false;
        }
    }else{ 
        elemento.style.border = '2px red solid';
        return false;
    } 
}

// galeria
var contador = 0;
var imagenA;
var imagenS;
var imagen;
var desplazarA=100; 
var desplazarS=0; 
var interval;

var lista = [1,2,3,4,5,6,7,8,9,10];
var imagen = [];
function iniciarImagenes(){
    imagen[0] = document.getElementById('imagen1');
    imagen[1] = document.getElementById('imagen2');
    imagen[2] = document.getElementById('imagen3');
    imagen[3] = document.getElementById('imagen4');
    imagen[4] = document.getElementById('imagen5');
    lista = lista.sort(function() {return Math.random() - 0.5});
    imagen[0].src="imagenes/android"+lista[0]+".jpg";
    imagen[0].style.width = "100%";
    imagen[1].src="imagenes/android"+lista[1]+".jpg";
    imagen[1].style.width = "0%";
    imagen[2].src="imagenes/android"+lista[2]+".jpg";
    imagen[2].style.width = "0%";
    imagen[3].src="imagenes/android"+lista[3]+".jpg";
    imagen[3].style.width = "0%";
    imagen[4].src="imagenes/android"+lista[4]+".jpg";
    imagen[4].style.width = "0%";
    contador=0;
}

function siguienteImagen(elemento) {
    if (contador==4) {
        elemento.disabled = true;
        document.getElementById('anterior').disabled = false;
    }else {
        elemento.disabled = false;
        document.getElementById('anterior').disabled = false;
        imagenA = imagen[contador];
        imagenS = imagen[contador+1];
        interval=setInterval(mover,10);         
        contador++;
        desplazarA=100; 
        desplazarS=0;
    }
}

function anteriorImagen(elemento) {
    if (contador==0) {
        elemento.disabled = true;
        document.getElementById('siguiente').disabled = false;
    }else {
        elemento.disabled = false;
        document.getElementById('siguiente').disabled = false;
        imagenA = imagen[contador];
        imagenS = imagen[contador-1];
        interval=setInterval(mover,10); 
        contador--;
        desplazarA=100; 
        desplazarS=0;
    }
}

function mover() { 
    desplazarA-=1;
    desplazarS+=1;
    if (desplazarA>=0 && desplazarA<100) {
        imagenA.style.width = desplazarA+"%";
        imagenS.style.width = desplazarS+"%";
        document.getElementById('siguiente').disabled = true;
        document.getElementById('anterior').disabled = true;
    }else{
        document.getElementById('siguiente').disabled = false;
        document.getElementById('anterior').disabled = false;
        clearInterval(interval);
    }
}

