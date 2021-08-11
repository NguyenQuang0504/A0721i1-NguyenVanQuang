function resultB1() {
    let a = document.getElementById('inputA').value;
    let b = document.getElementById('inputB').value;
    if(a%b==0){
        alert('a chia het cho b');
    }
    else{
        alert('a khong chia het cho b');
    }
}
function ResultB2() {
    let age = document.getElementById('input_age').value;
    if(age>=16){
        alert('Ban du tuoi vao lop 10');
    }
    else{
        alert('Ban chua du tuoi vao lop 10');
    }
}
function ResultB3() {
    let number = document.getElementById('inputNumber').value;
    if(number>0){
        alert('So ban vua nhap lon hon 0');
    }
    else if(number==0){
        alert('Ban vua nhap so 0');
    }
    else{
        alert('So ban vua nhap nho hon khong');
    }
}
function ResultB4() {
    let c = parseFloat(document.getElementById('numberFirst').value);
    let d = parseFloat(document.getElementById('numberSecond').value);
    let e = parseFloat(document.getElementById('numberThirt').value);
    let MAX = c;
    if(e>MAX){
        if(e>d){
            alert('MAX =' +e);
        }
        else{
            alert('MAX = ' +d);
        }
    }
    else{
        if(d>MAX){
            alert('MAX = ' +d);
    }
        else{
        alert('MAX = ' +c);
        }
    }
}
function ResultB5() {
    let cc = parseFloat(document.getElementById('number1').value);
    let gk = parseFloat(document.getElementById('number2').value);
    let ck = parseFloat(document.getElementById('number3').value);
    let tb = (cc*2+gk*2+ck*6)/10;
    if(tb>10.0){
        alert('Ban nhap lai so diem');
    }
    else if(tb>=8.5){
        alert('Ban duoc diem A');
    }
    else if(tb>=6.5){
        alert('Ban duoc diem B');
    }
    else if(tb>=4.0){
        alert('Ban duoc diem D');
    }
    else{
        alert('ban truot mon');
    }

}
function ResultB6() {
    let monney = parseInt(document.getElementById('monney').value);
    let value;
    if(monney>=10000000){
        value = monney*(20/100);
        alert('So tien lai = ' +value);
    }
    else if(monney >= 5000000) {
        value = monney*(10/100);
        alert('So tien lai = ' + value);
    }
    else if(monney >= 2000000) {
        value = monney * (5/100);
        alert('So tien lai = ' + value);
    }
    else{
        alert('Thang nay ban khong nhan duoc tien lai');
    }
}