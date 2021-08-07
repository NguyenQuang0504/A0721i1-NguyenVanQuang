function monthValue() {
let month = parseInt(document.getElementById('month').value);
switch (month) {
    case 1:
        document.getElementById('result').innerText = 'thang 1 co 31 ngay';
        break;
    case 2:
        document.getElementById('result').innerText = 'thang 2 co 28 ngay hoac 29 ngay';
        break;
    case 3:
        document.getElementById('result').innerText = 'thang 3 co 31 ngay';
        break;
    case 4:
        document.getElementById('result').innerText = 'thang 4 co 30 ngay';
        break;
    case 5:
        document.getElementById('result').innerText = 'thang 5 co 31 ngay';
        break;
    case 6:
        document.getElementById('result').innerText = 'thang 6 co 30 ngay';
        break;
    case 7:
        document.getElementById('result').innerText = 'thang 7 co 31 ngay';
        break;
    case 8:
        document.getElementById('result').innerText = 'thang 8 co 30 ngay';
        break;
    case 9:
        document.getElementById('result').innerText = 'thang 9 co 31 ngay';
        break;
    case 10:
        document.getElementById('result').innerText = 'thang 10 co 30 ngay';
        break;
    case 11:
        document.getElementById('result').innerText = 'thang 11 co 31 ngay';
        break;
    case 12:
        document.getElementById('result').innerText = 'thang 12 co 30 ngay';
        break;
}

}