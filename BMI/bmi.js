function calculateBMI() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const weightNum = Number(weightInput.value);
    const heightNum = Number(heightInput.value / 100);
    const BMI = weightNum / Math.pow(heightNum, 2);
    const BMIResult = BMI.toFixed(2);
    const result = document.getElementById('result');
    result.textContent = BMIResult;

    const resultBlock = document.querySelector('.result-block');

    if (BMIResult > 30.0 || BMIResult < 18.5) {
        resultBlock.classList.add('result-red');
        resultBlock.classList.remove('result-green');
    }
    else {
        resultBlock.classList.add('result-green');
        resultBlock.classList.remove('result-red');
    }
}

const btn = document.getElementById('button');
btn.addEventListener('click', calculateBMI);