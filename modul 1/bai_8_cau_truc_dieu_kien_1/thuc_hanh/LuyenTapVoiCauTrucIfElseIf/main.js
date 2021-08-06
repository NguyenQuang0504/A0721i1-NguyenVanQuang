function send_user_name() {
    let a = document.getElementById('userName').value;
    if (a == 'Admin') {
        document.getElementById('pass').style.display = 'block';
    } else if (a == '') {
        alert('Canceled');
    } else {
        alert('I don’t know you');
    }
}
function send_p() {
    let b = document.getElementById('password').value;
    if (b == 'TheMaster') {
        alert('Welcome!');
    } else if (b == '') {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
}