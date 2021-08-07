function init() {
    document.getElementById('myImage').style.position = 'relative';
    document.getElementById('myImage').style.left = '0px';
}
function moveRight() {
    document.getElementById('myImage').style.left = parseInt(document.getElementById('myImage').style.left) + 10 + 'px';
}
window.onload = init;
