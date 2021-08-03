// Bai1
let i =10;
let f = 20.5;
let b = true;
let s = "Ha Noi"
function btn() {
    document.writeln("<br>");
    document.write('i= '+i);
    document.writeln("<br>");
    document.write('f= '+f);
    document.writeln("<br>");
    document.write('b= '+b);
    document.writeln("<br>");
    document.write('chuoi s= '+s);
}
// End bai 1

// Bai2
function get(){
let width = 20;
let height = 30;
let sult = width*height;
document.write('Dien tich hinh chu nhat la='+sult);
}
// end bai 2

// Bai3
function sult() {
    let a = prompt('Ban hay nhap so a=');
    let b = prompt('ban hay nhap so b =');
    let sul=parseInt(a)%parseInt(b);
    if (sul===0){
        alert('a la boi so cua b');
    }
    else {
        alert('a khong la boi so cua b');
    }

}