function send() {
    let a = document.getElementById('fcurrency').value;
    let b= document.getElementById('tcurrency').value;
    let c= document.getElementById('Amount').value;
    let d= (parseInt(c)*parseInt(a))/parseInt(b);
    document.getElementById('kq').innerText=d;
}