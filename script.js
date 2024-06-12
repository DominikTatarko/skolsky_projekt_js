//na prepínač som použil stranku modzilla
//prepínač medzi svetlou a tmavou obrazovkou
function switchmode() {
    var sun = document.getElementById("sun");
    var moon = document.getElementById("moon");
    var body = document.getElementById("body");
    var nav = document.getElementById("navbar");
    var foot = document.getElementById("footer");
    var atag = document.getElementsByTagName("a");


    
    if (moon.style.display === "none") {
        sun.style.display = "none";
        moon.style.display = "block";
        body.classList.toggle("darkmode");
        nav.classList.remove("bg-body-secondary");
        nav.style.background= "black";
        foot.style.background= "black";
        foot.classList.remove("bg-body-secondary");
        for (var i = 0; i < 4; i++) {
            atag[i].style.color = "white";
        }


    } 
    else {
        sun.style.display = "block";
        moon.style.display = "none";
        body.classList.remove("darkmode");
        
        nav.classList.add("bg-body-secondary");
        
        foot.classList.add("bg-body-secondary");
        for (var i = 0; i < 4; i++) {
            atag[i].style.color = "black";
        }
    }


}

//zadanie svojej úrovni
function skusenost(){
   var  textParagraf = document.getElementById("text-paragraf");
   var textik = document.getElementById("vysuroven");
   var uroven = document.getElementById("hodnoteniaInput").value;

   textParagraf.style.display = "block";
   textik.innerText = "Zaznamenali sme že ste: "+ uroven;
}

//označenie že si si naštudoval text
function vybavenejeden() {
    var vybaveneone = document.getElementById("vybaveneone");
   
    vybaveneone.style.display = "block";
}
function vybavenedva(){
    var vybavenetwo = document.getElementById("vybavenetwo");
    vybavenetwo.style.display = "block";
}
function vybavenetri(){
    var vybavenethree = document.getElementById("vybavenethree");
    vybavenethree.style.display = "block"; 
}
function vybavenestyri(){
    var vybavenefour = document.getElementById("vybavenefour")
    vybavenefour.style.display = "block";
}
function vybavenepat(){
    var vybavenefive = document.getElementById("vybavenefive");
    vybavenefive.style.display = "block";
}

function zvyraznenie() {
    var vybavene = document.getElementsByClassName("vybavene");
    for (var i = 0; i < vybavene.length; i++) {
        vybavene[i].style.color = "red";
        vybavene[i].style.fontWeight = "400";
    }
}

//test
function test(){
 var meno = document.getElementById("meno").value;
 var priezvisko = document.getElementById("priezvisko").value;
 var body = 0;
 var vysledok = document.getElementById("vysledok");
 
 body = otazkajedna(body);
 body = otazkadva(body);
 body = otazkatri(body);
 body = otazkastyri(body);
 body = otazkapat(body);
 vysledok.innerHTML = "Ahoj "+ meno + " " + priezvisko + " získal si " + body + " bodov.";
}
//príkaz parentNode mi pomohol chatgpt
function otazkajedna(body){
    var jedenjeden = document.getElementById("jedenjeden");
    var jedendva = document.getElementById("jedendva");
    var jedentri = document.getElementById("jedentri");

    if(jedendva.checked){
        body++;
        jedendva.parentNode.style.color="green"
    }else if(jedenjeden.checked){
        body+=0;
        jedenjeden.parentNode.style.color = "red"
    }
    else if(jedentri.checked){
        body+=0
        jedentri.parentNode.style.color = "red"
    }
    return body;

}
function otazkadva(body){
    var dvajeden = document.getElementById("dvajeden");
    var dvadva = document.getElementById("dvadva");
    var dvatri = document.getElementById("dvatri");

    if(dvadva.checked){
        body++;
        dvadva.parentNode.style.color = "green"
    }else if(dvajeden.checked){
        body+=0;
        dvajeden.parentNode.style.color = "red"
    }
    else if(dvatri.checked){
        body+=0
        dvatri.parentNode.style.color = "red"
    }
    return body;
}
function otazkatri(body){
    var trijeden = document.getElementById("trijeden");
    var dvandva = document.getElementById("tridva");
    var tritri = document.getElementById("tritri");

    if(trijeden.checked){
        body++;
        trijeden.parentNode.style.color = "green"
    }else if(dvandva.checked){
        body+=0;
        dvandva.parentNode.style.color = "red"
    }
    else if(tritri.checked){
        body+=0
        tritritri.parentNode.style.color = "red"
    }
    return body;
}
function otazkastyri(body){
    var styrijeden = document.getElementById("styrijeden");
    var styridva = document.getElementById("styridva");
    var styritri = document.getElementById("styritri");

    if(styrijeden.checked){
        body++;
        styrijeden.parentNode.style.color = "green"
    }else if(styridva.checked){
        body+=0;
        styridva.parentNode.style.color = "red"
    }
    else if(styritri.checked){
        body+=0
        styritri.parentNode.style.color = "red"
    }
    return body;
}
function otazkapat(body){
    var patjeden = document.getElementById("patjeden");
    var patdva = document.getElementById("patdva");
    var pattri = document.getElementById("pattri");

    if(pattri.checked){
        body++;
        pattri.parentNode.style.color = "green"
    }else if(patdva.checked){
        body+=0;
        patdva.parentNode.style.color = "red"
    }
    else if(patjeden.checked){
        body+=0
        patjeden.parentNode.style.color = "red"
    }
    return body;
}
//vyjadrenie na konci stranky
function vyjadrenie() {
    var email = document.getElementById("emailInput").value;
    var komentar = document.getElementById("komentarInput").value;
    var hodnotenie = document.getElementById("hodnoteniaInput").value;

    var vstupElement = document.getElementById("vstup");
    var vystupElement = document.getElementById("vystup");

    
    vstupElement.style.display = "none";
    vystupElement.style.display = "block";
    document.getElementById("vysemail").innerHTML = "Email: " + email;
    document.getElementById("vyskomentar").innerHTML = "Komentar: " + komentar;
    document.getElementById("vyshodnotenie").innerHTML = "Hodnotenie: " + hodnotenie;
    
}