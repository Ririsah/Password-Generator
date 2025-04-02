const display = document.querySelector('.result_display');

document.querySelector('.btn').addEventListener('click', function(){

    const includeLowercase = document.querySelector('.includeLowercase').checked;
    const includeUppercase = document.querySelector('.includeUppercase').checked;
    const includeNumbers = document.querySelector('.includeNumbers').checked;
    const includeSymbols = document.querySelector('.includeSymbols').checked;
    const passwordSize = document.querySelector('.passwordSize').value;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "!@#$%&+=_-*";

    let allowedChars = "";
    includeLowercase && (allowedChars += lowercaseChars);
    includeUppercase && (allowedChars += uppercaseChars);
    includeNumbers && (allowedChars += numberChars);
    includeSymbols && (allowedChars += symbolsChars);

    let passWord = "";
    for (let i = 0; i < passwordSize; i++ ) {
        let randomChar = Math.trunc(Math.random() * allowedChars.length);
        passWord += allowedChars[randomChar];
    }

    display.innerHTML = `${passWord}`;
});















