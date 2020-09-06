var ciklusok = 0;
var lathatoSzemelyek = false;
var jatekPontszam = 0;
var osztalyBeallito = "";

function jatekCiklus() {
    lathatoSzemelyek = !lathatoSzemelyek; /* A látható személyek értékét TRUEra állítja h lefusson a  osztalyBeallitas függvény */
    osztalyBeallitas();
    szereploLetrehozas();
    ciklusok++;
    if (ciklusok > 8 && ciklusok < 24) {
        setTimeout(jatekCiklus, lathatoSzemelyek ? 1000 : 3000);
    }
    else if (ciklusok < 24) {
        setTimeout(jatekCiklus, lathatoSzemelyek ? 2000 : 3000);
    }
    else {
        alert("A játék véget ért! Összpontszám: " + jatekPontszam);
    }
}

/* Létrehozza a Class tulajdonságát amit hozzá kell rendelni */
function osztalyBeallitas() {
    var tabla = document.getElementById("tabla");
    if (lathatoSzemelyek) {
        osztalyBeallito = "szereplo lathato";
    } else {
        osztalyBeallito = "szereplo rejtett";
    }
}

/* Megjeleníti a mezőket a fent meghatározott időre */
function szereploLetrehozas() {
    var tabla = document.getElementById("tabla");
    for (var index = 0; index < 12; index++) { /* Hozzárendeli a class tulajdonságot és egy funkciót is a pontozáshoz */
        tabla.children[index].className = osztalyBeallito;
        tabla.children[index].onclick = pontElVetel;
    }
    var veletlenSzam = Math.floor(Math.random() * 12) + 1; /* A for cikluson kívül, de a függvényen belül , mivel csak egyszer kell elfusson, de egyszer le kell minden meghívásnál, Hozzárendeli a tolvaj class tulajdonságot(felülírja) és egy funkciót is a pontozáshoz */
    tabla.children[veletlenSzam - 1].className = osztalyBeallito + " tolvaj";
    tabla.children[veletlenSzam - 1].onclick = pontHozzaAdas;
}

// Pont levonása ha sima szereplőre kattint 
function pontElVetel() {
        jatekPontszam += -2;
        document.getElementById("pontszam").innerHTML = jatekPontszam;
}
// Pont hozzáadása ha a tolvajra kattint 
function pontHozzaAdas() {
        jatekPontszam++;
        document.getElementById("pontszam").innerHTML = jatekPontszam;
}
