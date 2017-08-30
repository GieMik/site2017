const form = document.querySelector('form');

const inputs = Array.from(document.querySelectorAll('input, textarea'));

const inputErrors = Array.from(document.querySelectorAll('span.error'));

inputs.map((input, index) => {
    input.onblur = () => {
        if (input.value.length > 0) {
            inputErrors[index].innerText = '';
        } else {
            inputErrors[index].innerText = 'Please fill this field';
        }
    }
})

form.addEventListener('submit', event => {
    event.preventDefault();

    inputs.map(input => {
        input.onblur();
    })

    if (name.value !== '' && lastName.value !== '' && message.value !== '') {
        form.reset();
        alert('Succesfully submitted');
    }
});