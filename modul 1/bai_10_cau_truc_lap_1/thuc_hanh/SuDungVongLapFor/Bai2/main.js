function result_ip() {
let a = document.getElementById('input').value;
let i;
let s=0;
for(i=0;i<=a;i++){
    s=s+i;
}
document.getElementById('result_ip').innerHTML="Tong cac so tu 0 den " +a +" la " +s;
}