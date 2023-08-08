const generatePasswordBtn = document.querySelector(".form > button");
const password = document.querySelector(".form > input");
const notifications = document.querySelector(".notifications");

const alphabetLowercase = "abcdefghijklmnopqrstuvwxyz";
const alphabetUppercase = alphabetLowercase.toUpperCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=";

generatePasswordBtn.addEventListener("click", () => {
    if(!generatePassword()) {
        alert("Check at least one checkbox, password length cannot be negative or euqal zero!")
    }
});

function generatePassword() {
    const passwordLength = document.querySelector("#password-legth").value;

    const numbersCheckbox = document.querySelector("#numbers").checked;
    const uppesLettersCheckbox = document.querySelector("#uppercase-letter").checked;
    const lowerLettersCheckbox = document.querySelector("#lowercase-letter").checked;
    const sybmbolsCheckbox = document.querySelector("#symbols").checked;

    if(!(numbersCheckbox || uppesLettersCheckbox || lowerLettersCheckbox || sybmbolsCheckbox) || (passwordLength < 1)) {
        return false;
    }

    let passwordAlphabet = "";

    if(numbersCheckbox)
        passwordAlphabet += numbers;

    if(uppesLettersCheckbox)
        passwordAlphabet += alphabetUppercase;

    if(lowerLettersCheckbox)
        passwordAlphabet += alphabetLowercase;

    if(sybmbolsCheckbox)
        passwordAlphabet += symbols;

    let generatedPassword = "";

    for(let i = 0; i < passwordLength; i++)
        generatedPassword += passwordAlphabet[Math.floor(Math.random() * passwordAlphabet.length)];

    navigator.clipboard.writeText(generatedPassword);

    password.value = generatedPassword;
    showNotigfication(generatedPassword);

    return true;
}

function showNotigfication(password) {
    const notification = document.createElement("div");
    notification.classList.add("notification");

    notification.innerText = `Password: ${password} copied`;

    notifications.appendChild(notification);

    setTimeout(() => {notification.remove()}, 2000);
}

password.addEventListener("click", () => {
    navigator.clipboard.writeText(password.value);
});