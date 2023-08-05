const generatePasswordBtn = document.querySelector(".generate-password");
const password = document.querySelector(".password");
const notifBox = document.querySelector(".notifications");

const alphabetLowercase = "abcdefghijklmnopqrstuvwxyz";
const alphabetUppercase = alphabetLowercase.toUpperCase();
const numbers = "01234567689";


generatePasswordBtn.addEventListener("click", () => {
    if(!generatePassword()) {
        alert("Check at least one checkbox");
    }
})

function generatePassword() {
    const passwordLength = document.querySelector(".password-length").value;

    const numbersCheckbox = document.querySelector("#numbers").checked;
    const upperLettersCheckbox = document.querySelector("#uppercase-letters").checked;
    const lowerLettersCheckbox = document.querySelector("#lowercase-letters").checked;
    const symbolsCheckbox = document.querySelector("#special").checked;

    if(!(numbersCheckbox || upperLettersCheckbox || lowerLettersCheckbox || symbolsCheckbox)) {
        return false;
    }

    let passwordAlphabet = "";

    if(numbersCheckbox) {
        passwordAlphabet += numbers;
    }
    if(upperLettersCheckbox) {
        passwordAlphabet += alphabetUppercase;
    }
    if(lowerLettersCheckbox) {
        passwordAlphabet += alphabetLowercase;
    }
    if(symbolsCheckbox) {
        passwordAlphabet += "!@#$%^&*()-=_+";
    }

    let generatedPassword = "";

    for(let i = 0; i < passwordLength; i++) {
        generatedPassword += passwordAlphabet[Math.floor(Math.random() * passwordAlphabet.length)]
    }

    navigator.clipboard.writeText(generatedPassword);

    password.value = generatedPassword;
    showInfoMessage(generatedPassword);

    return true;
}

function showInfoMessage(password) {
    const notif = document.createElement("div");
    notif.classList.add("info-message");

    notif.innerText = `Password: ${password} copied`;

    notifBox.appendChild(notif);

    setTimeout(() => {notif.remove() }, 2000);
}

password.addEventListener("click", () => {
    navigator.clipboard.writeText(password.value);
    showInfoMessage(password.value);
})