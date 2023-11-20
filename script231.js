function checkPassword() {
    var enteredPassword = document.querySelectorAll('.character-inputs input');
    var expectedPassword = 'thisismetrying';
    var enteredValue = Array.from(enteredPassword).map(input => input.value.toLowerCase()).join('');

    var submitButton = document.querySelector('.submit-button');
    submitButton.classList.remove('correct', 'incorrect');

    if (enteredValue === expectedPassword) {
        submitButton.classList.add('correct');
        setTimeout(function () {
            submitButton.classList.remove('correct');

            setTimeout(function () {
                window.location.href = 'flower23.html'; // Redirect to flower231.html after 2 seconds
            }, 2000); // 2 seconds delay for redirection
        }, 0);
    } else {
        submitButton.classList.add('incorrect');
        setTimeout(function () {
            submitButton.classList.remove('incorrect');
        }, 1000); // 1 second delay
        displayResult('error', 'Incorrect password. Please try again.');
    }
}


function checkTranslation() {
    var enteredText = document.getElementById('translation').value.toLowerCase();
    var expectedText = 'romanian';

    var submitButton = document.querySelector('.submit-button');

    if (enteredText === expectedText) {
        submitButton.classList.add('correct');
        setTimeout(function () {
            document.querySelector('.part1').style.opacity = '0';
            document.querySelector('.part1').style.transition = 'opacity 2s';

            setTimeout(function () {
                document.querySelector('.part1').style.display = 'none';
                document.querySelector('.part2').style.display = 'block';
                document.querySelector('.part2').style.opacity = '1';
                document.querySelector('.part2').style.transition = 'opacity 2s';
            }, 2000); // 2 seconds delay
        }, 0);
    } else {
        submitButton.classList.add('incorrect');
        setTimeout(function () {
            submitButton.classList.remove('incorrect');
        }, 1000); // 1 second delay
        displayResult('error', 'Incorrect Language. Please try again.');
    }
}


function displayResult(className, message) {
    var resultElement = document.querySelector('.result');
    resultElement.innerHTML = '<p class="' + className + '">' + message + '</p>';

    if (className === 'success' && document.querySelector('.part2').style.display === 'block') {
        setTimeout(function () {
            window.location.href = './flower23.html'; // Redirect to flower23.html after 3 seconds
        }, 3000);
    }
}


function focusNext(currentInput) {
    var maxLength = parseInt(currentInput.maxLength);
    var nextInput = currentInput.nextElementSibling;

    // Skip <br> elements
    while (nextInput && nextInput.tagName.toLowerCase() === 'br') {
        nextInput = nextInput.nextElementSibling;
    }

    if (currentInput.value.length === maxLength && nextInput) {
        nextInput.focus();
    }
}

