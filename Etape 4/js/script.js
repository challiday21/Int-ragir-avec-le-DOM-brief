const BTN = document.querySelector('button');
const CONTENT = document.querySelector('#content');
// appeler function pour afficher l'heure chaque second
repeatDisplayTime();


// afficher l'heure tous les secondes
function repeatDisplayTime(){
    setInterval(displayTime,1000);
}


// chercher l'heure actuelle dans un nouvel objet Date
function displayTime(){
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    h = modifyTime(h);
    m = modifyTime(m);
    s = modifyTime(s);

    CONTENT.textContent = h+":"+m+":"+s;
    // afficher l'heure en rouge si s%3==0
    if (s % 3 == 0){
        // document.getElementById("content").style.color = "red"
        document.getElementById("content").className = "heureRouge"
    // autrement afficher l'heure en noir
    } else {
        document.getElementById("content").className = "heureNoir"
    }
}


// ajouter un '0' quand h, m ou s sont <10 pour
// rassurer que l'heure est dans la forme hh:mm:ss
    function modifyTime(k){
    if (k < 10) {
        k = "0"+k;
    }
    return k;
}