let form_errors = [];

const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageTextarea = document.getElementById('message');
const errorOutput = document.getElementById('error-output');
const infoOutput = document.getElementById('info-output');

function showErrorMessage(message) {
    errorOutput.textContent = message;
    errorOutput.style.opacity = '1';
    
    setTimeout(() => {
        let opacity = 1;
        const fadeInterval = setInterval(() => {
            opacity -= 0.1;
            errorOutput.style.opacity = opacity;
            if (opacity <= 0) {
                clearInterval(fadeInterval);
                errorOutput.textContent = '';
                errorOutput.style.opacity = '1';
            }
        }, 100);
    }, 3000);
}

function logError(fieldName, errorType) {
    form_errors.push({
        field: fieldName,
        errorType: errorType
    });
}

// Message validation and error

const maxChars = 280;

function updateCharCount() {
    const remainingChars = maxChars - messageTextarea.value.length;
    infoOutput.textContent = `${remainingChars} characters remaining`;
    
    if (remainingChars <= 10) {
        infoOutput.style.color = 'red';
    } else if (remainingChars <= 50) {
        infoOutput.style.color = 'orange';
    } else {
        infoOutput.style.color = 'var(--primary-color)';
    }
    
    if (remainingChars < 0) {
        showErrorMessage('Message exceeds the maximum length');
        logError('message', 'exceeded_max_length');
    }
}

updateCharCount();
messageTextarea.addEventListener('input', updateCharCount);

// Validation errors

nameInput.addEventListener('blur', () => {
    if (!nameInput.checkValidity()) {
        showErrorMessage('Name is required and must contain only letters and spaces.');
        logError('name', 'invalid_format');
    }
});

emailInput.addEventListener('blur', () => {
    if (emailInput.value && !emailInput.checkValidity()) {
        showErrorMessage('Please enter a valid email address.');
        logError('email', 'invalid_format');
    }
});

messageTextarea.addEventListener('blur', () => {
    if (!messageTextarea.checkValidity()) {
        showErrorMessage('Message is required.');
        logError('message', 'empty_field');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = nameInput.value;
    let email = emailInput.value;
    let message = messageTextarea.value;
    let errors = JSON.stringify(form_errors);

    let xhr = new XMLHttpRequest();
    let url = `https://httpbin.org/get?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}&form-errors=${encodeURIComponent(errors)}`;
    xhr.open('GET', url, true);
    xhr.setRequestHeader('X-Sent-By', 'JavaScript');
    xhr.send(null);

    form.reset();
    updateCharCount();
});