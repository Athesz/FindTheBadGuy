dataLoad();

var ciklus = 0;
var jatekPontszam = 0;
var kijelzo = document.getElementById("pontszam");
kijelzo.innerHTML = jatekPontszam;

var idozitoSzamlalo = 30;
var idozito = document.getElementById("idozito");
idozito.innerHTML = idozitoSzamlalo;

var gameSpeed = 0;
function easyMODE(){   
    gameSpeed = 3000;
    jatekInditas();
}

function hardMODE(){   
    gameSpeed = 1000;
    jatekInditas();
}

function jatekInditas() {
    jatekCiklus();
    visszaSzamol();
}

function visszaSzamol(){    
    idozitoSzamlalo--;       
    idozito.innerHTML = idozitoSzamlalo;
    if (idozitoSzamlalo>0) {
        setTimeout(visszaSzamol, 1000);
    }
}

function jatekCiklus(){   
    szereploLetrehozas();
    if (idozitoSzamlalo>0) {
        setTimeout(jatekCiklus, gameSpeed);        
    } else {
        alert("TIME OUT!!!");
        recordScore();
    }
}

function recordScore(){
    var name = prompt("Please enter your name:");
    var listItem = document.createElement("li"); 
    var playerScore = document.createTextNode("NAME: " + name + " SCORE: " + jatekPontszam);
    listItem.appendChild(playerScore);
    document.getElementById("scoreList").appendChild(listItem); 
    dataSave();
}

function dataSave(){
    localStorage.taroltLista = document.getElementById("scoreList").innerHTML;
}

function dataLoad(){
    document.getElementById("scoreList").innerHTML =  localStorage.taroltLista;
}

function szereploLetrehozas(){    
    var tabla = document.getElementById("tabla");   
    var osztalySzereplo = "szereplo";
    for (var i = 0; i < 8; i++) {
        tabla.children[i].className = osztalySzereplo;
        tabla.children[i].onclick = function(){
            jatekPontszam += -2;
            kijelzo.innerHTML = jatekPontszam;
        }               
    }
    var veletlenSzam = Math.floor(Math.random()*8)+1;
    tabla.children[veletlenSzam-1].classList.add("tolvaj");
    tabla.children[veletlenSzam-1].onclick = function(){
        jatekPontszam++;
        kijelzo.innerHTML = jatekPontszam;
    }  
}