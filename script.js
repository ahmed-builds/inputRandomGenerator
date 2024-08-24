function random(min, max){
    return min + Math.random() * (max - min);
}
const inputMinValue = document.getElementById('inputMinValue');
const inputMaxValue = document.getElementById('inputMaxValue');

const buttonGenerate = document.getElementById('generateNumber');

const resultNumber = document.getElementById('resultNumber');

const errorDiv = document.getElementById('error');



buttonGenerate.addEventListener('click', function(e){
    e.preventDefault();
    const FinalMinValue = Number(inputMinValue.value);
    const FinalMaxValue = Number(inputMaxValue.value);
    console.log(isNaN(FinalMinValue), isNaN(FinalMaxValue));

    if(isNaN(FinalMinValue) == false && isNaN(FinalMaxValue) == false){        
        if(FinalMinValue != '' && FinalMaxValue != '') {
            
            if(FinalMaxValue >= FinalMinValue){
                const finalGeneratedNumber = Math.floor(random(FinalMinValue, FinalMaxValue));
                resultNumber.textContent = finalGeneratedNumber;
                resultNumber.classList.add('resultEnable');
                console.log(Math.floor(random(FinalMinValue, FinalMaxValue)));
                errorDiv.textContent = '';
            } else {
                errorDiv.textContent = 'The Max value should not be lesser than Min value';
            }
        } else {
            errorDiv.textContent = 'The Value cannot be empty.';
        }
    } else {
        if(isNaN(FinalMinValue) == true){
            errorDiv.textContent = 'The Min Value should be a number.';
        } else {
            errorDiv.textContent = 'The Max Value should be a number.';
        }
    }
})