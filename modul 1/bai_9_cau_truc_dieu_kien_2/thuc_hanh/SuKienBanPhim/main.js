function keyUp() {
    var img1 =document.getElementById('imgVit');
    img1.style.top = parseInt(img1.style.top) - 5 + 'px';
}
function keyDow() {
    var img1 =document.getElementById('imgVit');
    img1.style.top = parseInt(img1.style.top) + 5 + 'px';
}
function keyLeft() {
    var img1 =document.getElementById('imgVit');
    img1.style.left = parseInt(img1.style.left) - 5 + 'px';
}
function keyRight() {
    var img1 =document.getElementById('imgVit');
    img1.style.left = parseInt(img1.style.left) + 5 +'px';
}
function test(key) {
    switch (key.keyCode) {
        case 37:
            keyLeft();
            break;
        case 39:
            keyRight();
            break;
        case 40:
            keyDow();
            break;
        case 38:
            keyUp();
            break;
    }
}
// function get(k) {
// alert(k.keyCode) ;}
function docReady() {
    window.addEventListener('keydown', test);
}