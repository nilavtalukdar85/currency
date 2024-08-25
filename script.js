let selectFrom = document.querySelector('.select-from');
let imgFrom = document.querySelector('.img-from');
let selectTo = document.querySelector('.select-to');
let imgTo = document.querySelector('.img-to');
let btn = document.querySelector('.btn');
let outputText = document.querySelector('.output-text');
let input = document.querySelector('.input-amount');
selectFrom.addEventListener('click', () => {
    flagChange1();
});
selectTo.addEventListener('click', () => {
    flagChange2();
});
const flagChange1 = () => {
    let value = selectFrom.value;
    if(value == 'usd') {
        imgFrom.setAttribute('src', 'us.png');
    } else if(value == 'inr') {
        imgFrom.setAttribute('src', 'in.png');
    } else if(value == 'aed') {
        imgFrom.setAttribute('src', 'ae.png');
    } else if(value == 'aud') {
        imgFrom.setAttribute('src', 'au.png');
    }
} 
const flagChange2 = () => {
    let value = selectTo.value;
    if(value == 'usd') {
        imgTo.setAttribute('src', 'us.png');
    } else if(value == 'inr') {
        imgTo.setAttribute('src', 'in.png');
    } else if(value == 'aed') {
        imgTo.setAttribute('src', 'ae.png');
    } else if(value == 'aud') {
        imgTo.setAttribute('src', 'au.png');
    }
}
const URL = 'https://v6.exchangerate-api.com/v6/95a1bc561d1bec166939a092/latest/USD';
const getData = async () => {
    let data = await fetch(URL);
    let response = await data.json();
    let from = selectFrom.options[selectFrom.selectedIndex].text;
    let to = selectTo.options[selectTo.selectedIndex].text;
    let fromVal = response.conversion_rates[from];
    let toVal = response.conversion_rates[to];
    let valueNum = input.value;
    input.value = '';
    result(fromVal, toVal, valueNum);
}
const result = (from, to, value) => {
    let resultValue = (value / from) * to;
    outputText.style.color = 'purple';
    outputText.style.fontSize = '1rem';
    outputText.innerText = resultValue;
}
btn.addEventListener('click', () => {
    let mainVal = Number(input.value);
    if(mainVal) {
        getData();
    } else {
        alert('You can only enter number')
    }
});