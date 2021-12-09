const qtdMin = 0
const qtdMax = 20;
const joystickPrice = 359.99;
let plusButton      = document.querySelector('.plus-button');
let minusButton     = document.querySelector('.minus-button');
let qtdField        = document.querySelector('.qtd-field');
let qtdEl           = document.querySelector('.qtd');
let productLabelEl  = document.querySelector('.product-label');
let totalPriceEl    = document.querySelectorAll('.total-price');

totalPriceEl.innerHTML  = 'R$ ' + joystickPrice;

let value = qtdField.value;      

plusButton.addEventListener('click', function () {
                 
    if(value >= qtdMax){
        qtdField.value = qtdMax;
        return false;
    }

    qtdField.value = ++value;
    qtdEl.textContent = value; 

    totalPriceEl.forEach(el =>  el.innerHTML = 'R$ ' + (joystickPrice * value).toFixed(2))  
    
    if(value > 1){
       productLabelEl.textContent = 'produtos'    
    }else{
       productLabelEl.textContent = 'produto'
    }

})

minusButton.addEventListener('click', function () {
    
    if(value <= qtdMin){
        qtdField.value = qtdMin;
        return false;
    }

    qtdField.value = --value;
    qtdEl.textContent = value;  

    totalPriceEl.forEach(el =>  el.innerHTML = 'R$ ' + (joystickPrice * value).toFixed(2))

    if(value <= 1){
       productLabelEl.textContent = 'produto'    
    }else{
       productLabelEl.textContent = 'produtos'
    }

})
