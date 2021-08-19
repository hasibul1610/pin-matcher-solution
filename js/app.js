function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;

    }else{
        console.log('get 3 digit and calling again', pin);
        getPin();
    }
}

function generatePin(){
    
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const calcInput = document.getElementById('typed-numbers');
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value ='';
        }
    }else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage =document.getElementById('notify-success');
    const failMessage =  document.getElementById('notify-fail');
    if(pin == typedNumbers){
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';

    }
    else{
        failMessage.style.display = 'block';
        successMessage.style.display = 'none';

    }
}