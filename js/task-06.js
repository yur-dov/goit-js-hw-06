const enterInput = document.querySelector('input'); 

const inputRef = document.querySelector('#validation-input');
const lengthString = parseInt(inputRef.dataset.length);         // 6

const handleSubmit = (event) => {
    event.preventDefault();
    const enterText = event.target.value.length;
    
    if (enterText === lengthString) {
        inputRef.setAttribute('class', 'valid')
    } else {
        inputRef.setAttribute('class', 'invalid')
    }
 };

enterInput.addEventListener('blur', handleSubmit);