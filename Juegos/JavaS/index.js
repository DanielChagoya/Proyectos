//cargo en un arreglo las imganes de las banderas. Este sera el orden que se mostrarán






let elementoss = ["AU.png", "cr.png", "fe.png", "na.png", "p.png", "pb.png","pd.png", "s.png", "sc.png", "sn.png"];

//arreglo que guardara la opcion correcta
let correcta = [2,2,0,1,0,0,1,2,0,1];

//arreglo que guardara los elementos a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada

opciones.push(["Azufre", "Argón", "Oro"]);
opciones.push(["Cobre", "Calcio", "Cromo"]);
opciones.push(["Hierro", "Holmio", "Francio"]);
opciones.push(["Vanadio", "Sodio", "Neptunio"]);
opciones.push(["Fosforo", "Polonio", "Plomo"]);
opciones.push(["Plomo","Polonio","Paladio"]);
opciones.push(["Platino", "Paladio", "Plomo"]);
opciones.push(["Seaborgio", "Sodio", "Azufre"]);
opciones.push(["Escandio", "Cerio", "Zirconio"]);
opciones.push(["Zinc", "Estaño", "Cobre"]);
//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarE();

}

//funcion que carga la siguiente bandera y sus opciones
function cargarE(){
    //controlo sis se acabaron las banderas
    if(elementoss.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("elementos").src = "../img/" + elementoss[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarE,1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = elementoss.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}
function principal(){
    window.location.href='../index.html' 
}