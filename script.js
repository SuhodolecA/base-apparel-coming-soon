const emailField = document.querySelector('.wrapper-content-main__form-input-email');
const formElement = document.querySelector('.wrapper-content-main__form');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailField.value;
    if (validateEmail(email)) {
        formElement.classList.remove('error');
        return;
    } else {
        formElement.classList.add('error');
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}