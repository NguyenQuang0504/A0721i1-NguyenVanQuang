
function ad() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    let c= parseInt(a)+parseInt(b);
    document.getElementById('kq').innerText = c;
}
function sub() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    let d= parseFloat(a)-parseFloat(b);
    document.getElementById('kq').innerText = d;
}
function Mul() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    let e= parseFloat(a)*parseFloat(b);
    document.getElementById('kq').innerText = e;
}
function Div() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    let f= parseFloat(a)/parseFloat(b);
    document.getElementById('kq').innerText = f;
}
