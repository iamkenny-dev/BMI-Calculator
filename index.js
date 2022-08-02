

// var button = document.querySelector('.btn');


function BMI() {

    var weight = document.getElementById("weight").value;

    var height = document.getElementById("height").value;

    var bmi = weight / (height * height);

    document.getElementById('heading').innerHTML = 'Your BMI is: '
    document.getElementById('bmi-output').innerHTML = bmi;

    if (bmi < 18.5) {
        document.getElementById('message').innerHTML = 'You are Underweight';
                }
    else if (bmi >= 18.5 || bmi <= 24.9) {
        document.getElementById('message').innerHTML = 'You are Normal weight';
                }
    else if (bmi >= 25 || bmi <= 29.9) {
        document.getElementById('Overweight').innerHTML = 'You are Overweight';
                }
    else if (bmi > 30) {
        document.getElementById('Obese').innerHTML = 'You are Obese';
                }
}

function reload() {
    window.location.reload();
}

// btn.addEventListener("click", alert(BMI);


