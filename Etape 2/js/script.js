function modifyTime(k){
    if (k < 10) {
        k = "0"+k;
    }
    return k;
}

function displayTime(){
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    h = modifyTime(h);
    m = modifyTime(m);
    s = modifyTime(s);
    CONTENT.textContent = h+":"+m+":"+s;    
}

function repeatDisplayTime(){
    setInterval(displayTime,1000);
}

const BTN = document.querySelector('button');
const CONTENT = document.querySelector('#content');

repeatDisplayTime();