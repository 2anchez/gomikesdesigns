const form = document.getElementById('form')
const username = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    if(usernameValue === '') {
        // show error
        setErrorFor(username, 'Name cannot be blank')
    } else {
        // show success
        setSuccessFor(username);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-group
    const small = formGroup.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formGroup.className = 'form-group error';


}