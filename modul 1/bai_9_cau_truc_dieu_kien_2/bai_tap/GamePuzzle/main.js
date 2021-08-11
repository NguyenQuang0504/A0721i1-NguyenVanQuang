let a = 0;
let b = 0;
let c = 0;
let d = 0;
function img1() {
    a=a+1;
    if (a===1) {
        document.getElementById('img1').src = 'img/img2.1.jpg'
    }
    else if(a===2){
        document.getElementById('img1').src = 'img/img3.1.jpg'
    }
    else{
        document.getElementById('img1').src = 'img/img1.1.jpg'
    }
    if(a>=3){
        a=0;
    }
    setTimeout(result1,200);
}
function img2() {
    b=b+1;
    if (b===1) {
        document.getElementById('img2').src = 'img/img2.2.jpg'
    }
    else if(b===2){
        document.getElementById('img2').src = 'img/img3.2.jpg'
    }
    else{
        document.getElementById('img2').src = 'img/img1.2.jpg'
    }
    if(b>=3){
        b=0;
    }
    setTimeout(result1,200);
}
function img3() {
    c=c+1;
    if (c===1) {
        document.getElementById('img3').src = 'img/img2.3.jpg'
    }
    else if(c===2){
        document.getElementById('img3').src = 'img/img3.3.jpg'
    }
    else{
        document.getElementById('img3').src = 'img/img1.3.jpg'
    }
    if(c>=3){
        c=0;
    }
    setTimeout(result1,200);
}
function img4() {
    d=d+1;
    if (d===1) {
        document.getElementById('img4').src = 'img/img2.4.jpg'
    }
    else if(d===2){
        document.getElementById('img4').src = 'img/img3.4.jpg'
    }
    else{
        document.getElementById('img4').src = 'img/img1.4.jpg'
    }
    if(d>=3){
        d=0;
    }
    setTimeout(result1,200);
}
function result1() {
    if(a===b&&b===c&&c===d){
        document.getElementById('result').innerText = 'Chinh Xac!'
    }
    else{
        document.getElementById('result').innerText = 'Rat tiec, ban hay thu lai!';
    }
}


