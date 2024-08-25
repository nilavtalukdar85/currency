let selectFrom = document.querySelector('.select-from');
let imgFrom = document.querySelector('.img-from');
let selectTo = document.querySelector('.select-to');
let imgTo = document.querySelector('.img-to');
let btn = document.querySelector('.btn');
let outputText = document.querySelector('.output-text');
let input = document.querySelector('.input-amount');
selectFrom.addEventListener('input', () => {
    flagChange1();
});
selectTo.addEventListener('input', () => {
    flagChange2();
});
const URL = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_6LC7mmFVKeSJDl8bqIvYMGTWPoMzsJLINMwbNfqk';
const getData = async () => {
    let data = await fetch(URL);
    let response = await data.json();
    let from = selectFrom.options[selectFrom.selectedIndex].text;
    let to = selectTo.options[selectTo.selectedIndex].text;
    let fromVal = response.data[from].value;
    let toVal = response.data[to].value;
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
for(let country in countryList) {
    let countryOpt = document.createElement('option');
    countryOpt.setAttribute('value', country.toLowerCase());
    countryOpt.innerText = country;
    selectFrom.append(countryOpt);
}
for(let country in countryList) {
    let countryOpt = document.createElement('option');
    countryOpt.setAttribute('value', country.toLowerCase());
    countryOpt.innerText = country;
    selectTo.append(countryOpt);
}
const flagChange1 = () => {
    let value = selectFrom.options[selectFrom.selectedIndex].text;
    imgFrom.setAttribute('src', `https://flagsapi.com/${countryList[value]}/flat/64.png`)
} 
const flagChange2 = () => {
    let value = selectTo.options[selectTo.selectedIndex].text;
    imgTo.setAttribute('src', `https://flagsapi.com/${countryList[value]}/flat/64.png`)
}
