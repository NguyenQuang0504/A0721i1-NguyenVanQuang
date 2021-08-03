function star() {
    let Diemly = document.getElementById('Diemly').value;
    let Diemhoa = document.getElementById('Diemhoa').value;
    let Diemsinh = document.getElementById('Diemsinh').value;
    let sult = parseFloat(Diemhoa) + parseFloat(Diemly) + parseFloat(Diemsinh);
    let TB = ( parseFloat(Diemhoa) + parseFloat(Diemly) + parseFloat(Diemsinh)) / 3;
    document.write('Diem Tong: ' + sult);
    document.write('Diem TB: ' + TB);
}
function temperature() {
    let DoC=document.getElementById('nhietdo').value;
    let DoF=(9/5)*parseFloat(DoC)+32;
    document.write('Do F la: '+DoF);
}
function s() {
let r=document.getElementById('r').value;
let dientich=parseFloat(r)*parseFloat(r)*3.14;
let chuvi= parseFloat(r)*2*3.14;
document.write("Dien tich hinh tron la: "+dientich);
document.writeln("<br>");
document.write("Chu vi hinh tron la: "+chuvi);
}