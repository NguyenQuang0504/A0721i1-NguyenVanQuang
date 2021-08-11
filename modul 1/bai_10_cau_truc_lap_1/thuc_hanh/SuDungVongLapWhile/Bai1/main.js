let s=0;
let a=0;
do{
    a = parseInt(prompt('Ban hay nhap a:'));
    alert('ban vua nhap '+a);
    s = s + a;
}
while(a!==(-1))
alert('Ket qua tong cac so vua nhap la '+s);