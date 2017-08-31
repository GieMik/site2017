const form = document.querySelector('form');

const inputs = Array.from(form.querySelectorAll('input, textarea'));

const inputErrors = Array.from(document.querySelectorAll('span.error'));

const name = document.querySelector('#name')
const lastName = document.querySelector('#lastName')
const message = document.querySelector('#message')

// Adds focusout event for every input or textarea field
// Checks if field is not empty - places an error text if empty
inputs.map((input, index) => {
    input.onblur = () => {
        if (input.value.length > 0) {
            inputErrors[index].innerText = '';
        } else {
            inputErrors[index].innerText = 'Please fill this field';
        }
    }
})

/* 
** Adds event listener for submiting the form
** Prevents the page from reloading
** Checks if fields ar not empty
** If there are empty fields - Force the focus out event for 
** every input in the form - look above (line 13)
*/  
form.onsubmit = event => {
    event.preventDefault();
    
    if (name.value !== '' && lastName.value !== '' && message.value !== '') {
        form.reset();
        alert('Succesfully submitted');
    } else {
        inputs.map(input => {
            input.onblur();
        })
    }
};