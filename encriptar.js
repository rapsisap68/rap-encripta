const mediaQuery = window.matchMedia('(max-width: 768px)');

// Función cargue Responsive de página Inicial 
function imagenSalidaResponsiveInicial(e) {
    const salidaTextarea = document.getElementById('textoSalida');
    const copiarBoton = document.getElementById('botonCopiar');
 
    salidaTextarea.style.backgroundPosition = "100% 50%";
    salidaTextarea.style.backgroundRepeat = "no-repeat";
    salidaTextarea.style.backgroundSize = "100% 100%";
    copiarBoton.style.display = "none";
 
    console.log('Responsive Inicial: ' + salidaTextarea.value);

    // Check if the media query is true
    
    if (e.matches) {
        console.log('Inicial Menos de 768: ');
        salidaTextarea.style.backgroundImage = "url('./images/Nohaymensaje.png')";
    } else {
        console.log('Inicial Mas de 768: ');
        salidaTextarea.style.backgroundImage = "url('./images/1.png')";
    }
}

//    Ajuste Salida Responsive (mediaQuery);
function ajustesSalidaResponsive(e) {
    const salidaTextarea = document.getElementById('textoSalida');
    const entradaEncriptar = document.getElementById('encriptar');
    const entradaDesencriptar = document.getElementById('desencriptar');
    const copiarBoton = document.getElementById('botonCopiar');
 
    salidaTextarea.style.backgroundPosition = "100% 50%";
    salidaTextarea.style.backgroundRepeat = "no-repeat";
    salidaTextarea.style.backgroundSize = "100% 100%";
 
    console.log('Ajuste SalidaTextArea: ' + salidaTextarea.value);

    // Check if the media query is true
    
 if (e.matches) {
        console.log('Ajuste Menos de 768: ' + salidaTextarea.value + "xxx " + salidaTextarea.style.backgroundImage);
        salidaTextarea.style.backgroundImage = "url('./images/Nohaymensaje.png')";
    } else {
        console.log('Ajuste Mas de 768: ' + salidaTextarea.value + "xxx " + salidaTextarea.style.backgroundImage);
        salidaTextarea.style.backgroundImage = "url('./images/1.png')";
 }
 if (salidaTextarea.value === "") {
        salidaTextarea.style.backgroundImage = "block";
        copiarBoton.style.display = "none";
    } else {
        salidaTextarea.style.backgroundImage = "none";
        copiarBoton.style.display = "block";
 }
}

//    Actualizar Imagen del Fondo de Salida y Botones Entrada y Salida
function actualizarFondoSalida() {
    const entradaTextArea = document.getElementById('textoEntrada');
    const salidaTextarea = document.getElementById('textoSalida');
    const copiarBoton = document.getElementById('botonCopiar');
    const entradaEncriptar = document.getElementById('encriptar');
    const entradaDesencriptar = document.getElementById('desencriptar');

    console.log('Actualizar - xx' + salidaTextarea.value + "xxx " + salidaTextarea.style.backgroundImage);
 
    if (salidaTextarea.style.display === 'none') { 
        salidaTextarea.style.backgroundImage = "block";
        copiarBoton.style.display = "none";
        entradaEncriptar.style.display = "block";
        entradaDesencriptar.style.display = "block";
        console.log('Actualizar - Salida Vacia xx' + salidaTextarea.value + "xxx " + salidaTextarea.style.backgroundImage);
 
    } else {
        salidaTextarea.style.backgroundImage = 'none';
        copiarBoton.style.display = "block";
        entradaEncriptar.style.display = "block";     
        entradaDesencriptar.style.display = "block";
        console.log('Actualizar - Salida NO Vacia yy' + salidaTextarea.value + "yyy " + salidaTextarea.style.backgroundImage);
        
    }
}

// Función copiar fondo de salida
function copiarFondoSalida() {
    const entradaTextArea = document.getElementById('textoEntrada');
    const salidaTextarea = document.getElementById('textoSalida');
    const copiarBoton = document.getElementById('botonCopiar');
    const entradaEncriptar = document.getElementById('encriptar');
    const entradaDesencriptar = document.getElementById('desencriptar');

    entradaEncriptar.style.display = "block";     
    entradaDesencriptar.style.display = "block";
    copiarBoton.style.display = "none";
    ajustesSalidaResponsive(mediaQuery);
//    actualizarFondoSalida();

    console.log('Copiar : Vacia Salida yy' + salidaTextarea.value + "yyy " + salidaTextarea.style.backgroundImage);
}

// Función para encriptar el texto
function encriptar() {
    const entradaTextarea = document.getElementById("textoEntrada");
    const salidaTextarea = document.getElementById("textoSalida");
    const mensaje = document.getElementById("textoInformativo");
    const copiarBoton = document.getElementById('botonCopiar');
    const entradaEncriptar = document.getElementById('encriptar');
    const entradaDesencriptar = document.getElementById('desencriptar');
   
    const texto = entradaTextarea.value;
    
    if (!/^[a-z\s]+$/.test(texto)) {
        mensaje.backgroundImage = "url('./images/letrasminusculas.png')";
         return;
    } else {
        mensaje.backgroundImage = "url('./images/letrasminusculas.png')";
    }

    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const textoEncriptado = texto.split('').map(char => reglas[char] || char).join('');
    salidaTextarea.value = textoEncriptado;

    salidaTextarea.style.backgroundImage = "none";
//    entradaEncriptar.style.display = "none";     
//    entradaDesencriptar.style.display = "none";
    copiarBoton.style.display = "block";
    ajustesSalidaResponsive(mediaQuery);
//    actualizarFondoSalida();
}

// Función para desencriptar el texto
function desencriptar() {
    const entradaTextarea = document.getElementById("textoEntrada");
    const salidaTextarea = document.getElementById("textoSalida");
    const mensaje = document.getElementById("textoInformativo");
    const copiarBoton = document.getElementById('botonCopiar');
    const entradaEncriptar = document.getElementById('encriptar');
    const entradaDesencriptar = document.getElementById('desencriptar');

    const texto = entradaTextarea.value;
    
    if (!/^[a-z\s]+$/.test(texto)) {
        mensaje.backgroundImage = "url('./images/letrasminusculas.png')";
        return;
    } else {
        mensaje.backgroundImage = "url('./images/letrasminusculas.png')";
    }
    const reglas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoDesencriptado = texto;
    for (let [key, value] of Object.entries(reglas)) {
        textoDesencriptado = textoDesencriptado.split(key).join(value);
    }
    salidaTextarea.value = textoDesencriptado;

    salidaTextarea.style.backgroundImage = "none";

//  entradaEncriptar.style.display = "none";     
//  entradaDesencriptar.style.display = "none";
    copiarBoton.style.display = "block";
    ajustesSalidaResponsive(mediaQuery);
//    actualizarFondoSalida();

}

// Función botón copiar
function copiar() {
    const salidaTextarea = document.getElementById("textoSalida");
    navigator.clipboard.writeText(salidaTextarea.value).then(() => {
        document.getElementById("textoEntrada").value = salidaTextarea.value;
        salidaTextarea.value = "";
        salidaTextarea.style.backgroundImage = "none";
        copiarFondoSalida();
    });
}


// Asignar eventos a los botones
document.getElementById("encriptar").addEventListener("click", encriptar);
document.getElementById("desencriptar").addEventListener("click", desencriptar);
document.getElementById("botonCopiar").addEventListener('click', copiar);

// Actualizar fondo al cargar la página
document.addEventListener("DOMContentLoaded", actualizarFondoSalida());

// Actualizar fondo al cambiar el tamaño de la ventana
window.addEventListener("resize", actualizarFondoSalida());

// Register event listener
mediaQuery.addListener(imagenSalidaResponsiveInicial);
mediaQuery.addListener(ajustesSalidaResponsive);

// Initial check
imagenSalidaResponsiveInicial(mediaQuery);