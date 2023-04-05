'use strict'

const inputForm = document.querySelector('.login-form')
inputForm.addEventListener('submit', submitForm)

function checkInput (event) {
    const inputMail = event.currentTarget.email;
    const inputPasswors = event.currentTarget.password;
    const arrForm = [];

    if (inputMail.value === '' || inputPasswors.value === '') {
        return alert('Each field must be filled!')
    }
    const formData = new FormData(event.currentTarget)
    const objForm = {}
    
    objForm.email = event.currentTarget.email.value;
    objForm.password = event.currentTarget.password.value;
    console.log(objForm);
    arrForm.push(objForm);
    console.log(arrForm);
    event.currentTarget.reset();
}

    function submitForm (event) {
        event.preventDefault()
        checkInput(event)
    }
