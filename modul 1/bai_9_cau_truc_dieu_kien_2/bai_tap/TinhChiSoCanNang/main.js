function inputValue() {
let weight = document.getElementById('weight').value;
let height = document.getElementById('height').value;
let bmi = parseFloat(weight)/(parseFloat(height)*parseFloat(height));
if(bmi<18.5){
    document.getElementById('result').innerText = 'Underweight';
}
else if(bmi<25){
    document.getElementById('result').innerText = 'Normal';
}
else if(bmi<30){
    document.getElementById('result').innerText = 'Overweight';
}
else{
    document.getElementById('result').innerText = 'Obese';
}
}