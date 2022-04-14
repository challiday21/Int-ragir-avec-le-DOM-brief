function modifyTime(k){
    if (k < 10) {
        k = "0"+k;
    }
    return k;
}

const BTN = document.querySelector('button');
const CONTENT = document.querySelector('#content');

BTN.addEventListener('click', function(){
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    h = modifyTime(h);
    m = modifyTime(m);
    s = modifyTime(s);
    CONTENT.textContent = "Hello World at "+h+":"+m+":"+s;
},1000);