var usuario = document.querySelector('input[type="text"]');
var clave = document.querySelector('input[type="password"]');

usuario.addEventListener('focus', function(event){
    event.target.style.background = "blue";
    event.target.style.color = "yellow";
});

usuario.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color = "black";
});

clave.addEventListener('focus', function(event){
    event.target.style.background = "blue";
    event.target.style.color = "yellow";
});

clave.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color = "black";
});

var usuarios = ["Sede Independencia","Sede Breña","Sede Bellavista","Sede Lima Centro","Sede San Juan De Lurigancho"];
var claves = ["Cibertec2022","Cibertec2022","Cibertec2022","Cibertec2022","Cibertec2022"];

function cargar(frm) {
    var usuario = frm.txtusuario.value;
    let i = -1;
    for(let j=0; j<usuarios.length; j++){
        if(usuarios[j] == usuario)
        i = j; break;
    }

    if (i == -1){
        window.event.preventDefault();
        alert("Datos no válidos");
        return;
    }

    var clave = frm.txtclave.value;
    if(clave==claves[i]){
        alert("Bienvenido, " + usuario);
        window.open("registro.html");
    } else {
        window.event.preventDefault();
        alert("Clave no coincide");
        return;
    }
}