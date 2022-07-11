let adviceText = document.querySelector('.card-text');
let adviceId = document.querySelector('#advice-id');
let adviceButton = document.querySelector('#advice-button');

const generateAdvice = () => {
    fetch("https://api.adviceslip.com/advice").then((response) => {
        response.json().then((responseData) => {
            adviceId.innerHTML = `#${responseData['slip']['id']}`
            adviceText.innerHTML = `\"<span id=\"advice-text\">${responseData['slip']['advice']}</span>\"`
        })
    })
}

document.querySelector('body').addEventListener('load', generateAdvice())
adviceButton.addEventListener('click', generateAdvice())