parpadear();

/* implemente un script que muestre la fecha del sistema */
let fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let anio= fecha.getFullYear();
/*Imprimir el valor de la fecha*/
document.getElementById("pf").innerHTML = "Fecha: " + dia + "/"+ mes + "/" + anio;

/*implemente un script que muestre un banner diferente cada segundo*/
var contador = 0;
function carrousel() {
contador++;
if (contador > 5) contador = 1;
document.getElementById("imgcab").setAttribute("src", "img/ban"+contador+".jpg");
setTimeout("carrousel()", 2000);
}
//invocar al método reloj al cargar la página html
document.body.setAttribute("onload","reloj(); carrousel()");


/*implemente un script que muestre un color diferente al título cada segundo*/
function parpadear() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //imprimir
    document.getElementById("h1cab").style.color = "rgb("+r+","+g+","+b+")";
    setTimeout("parpadear()", 1000);
}