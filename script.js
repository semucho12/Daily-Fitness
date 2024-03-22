const lessons = [
  {
    name: 'Zumba',
    trainer: 'Simon Tremain',
    image: 'images/trainer-1.png',
    info: 'Zumba is a fitness program that combines Latin and international music with dance moves to help improve cardiovascular fitness.',
  },
  {
    name: 'Dance Dance',
    trainer: 'Lucy Carmicheal',
    image: 'images/trainer-2.png',
    info: 'Dance dance is a fitness program that combines Scottish music with dance moves to help improve arm fitness.',
  },
  {
    name: 'Yoga Power',
    trainer: 'John Pox',
    image: 'images/trainer-3.png',
    info: 'Yoga power is a fitness program that will improve you health and welbeing through use of 7 different poses.',
  },
  {
    name: 'Super Flex',
    trainer: 'Tracy Sloth',
    image: 'images/trainer-4.png',
    info: 'Super flex is a fitness program that uses the power of flexing for your general wellbeing.',
  },
  {
    name: 'Spinning',
    trainer: 'Willian Moreno',
    image: 'images/trainer-5.png',
    info: 'You sit on a bike and you peddle and you do it for an hour at different speeds for maximum health boosting power.',
  },
  {
    name: 'Gymnastics',
    trainer: 'Aleesha Hill',
    image: 'images/trainer-6.png',
    info: 'Try not to break your neck in this thrilling new class by experienced olympic winner Aleesha.',
  },
];

let fitnessClasses = '';
lessons.forEach((lesson) => {
  fitnessClasses += `<article class="class-cards">
  <img src="${lesson.image}" alt="personal trainer">
  <div>
    <h3 class="classes">${lesson.name}</h3>
    <p class="orange">with ${lesson.trainer}</p>
    <hr>
    <p>${lesson.info}</p>
  </div>
</article>`;

});
// Function to validate the login form
function validateLogin() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    var usernameError = document.getElementById('loginUsernameError');
    var passwordError = document.getElementById('loginPasswordError');

    // Reset previous error messages
    usernameError.textContent = "";
    passwordError.textContent = "";
    
    var isValid = true;

    // Check if username is empty
    if (username.trim() === "") {
        usernameError.textContent = "Username cannot be empty";
        isValid = false;
    } else {
        // Username validation: At least 4 characters with at least one capital letter
        var usernameRegex = /^(?=.*[A-Z])[A-Za-z]{4,}$/;
        if (!username.match(usernameRegex)) {
            usernameError.textContent = "Username should be at least 4 characters long and contain at least one capital letter.";
            isValid = false;
        }
    }

    // Check if password is empty
    if (password.trim() === "") {
        passwordError.textContent = "Password cannot be empty";
        isValid = false;
    } else {
        // Password validation
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
        if (!password.match(passwordRegex)) {
            passwordError.textContent = "Password should contain at least 8 characters including one uppercase letter, one lowercase letter, one number, and one special character.";
            isValid = false;
        }
    }
  // If any field is empty or validation fails, prevent form submission
    if (!isValid) {
        event.preventDefault();
        return;
    

    // Perform login validation (dummy implementation)
    if (isValid) {
        // Perform login only if all validations pass
        if (username === 'username' && password === 'password') {
            // Simulate successful login
            alert('Login successful!\nWelcome, ' + username + '!');
        } else {
            // Simulate failed login
            alert('Incorrect username or password.');
        }
    }
}
}

// Function to validate the sign-up form
function validateSignUp() {
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var dob = document.getElementById('dob').value;
    var phone = document.getElementById('phone').value;

    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
    var dobError = document.getElementById('dobError');
    var phoneError = document.getElementById('phoneError');

    // Reset previous error messages
    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    dobError.textContent = "";
    phoneError.textContent = "";

    var isValid = true;

    // Check if username is empty
    if (username.trim() === "") {
        usernameError.textContent = "Username cannot be empty";
        isValid = false;
    } else {
        // Username validation: At least 4 characters with at least one capital letter
        var usernameRegex = /^(?=.*[A-Z])[A-Za-z]{4,}$/;
        if (!username.match(usernameRegex)) {
            usernameError.textContent = "Username should be at least 4 characters long and contain at least one capital letter.";
            isValid = false;
        }
    }

    // Check if password is empty
    if (password.trim() === "") {
        passwordError.textContent = "Password cannot be empty";
        isValid = false;
    } else {
        // Password validation
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
        if (!password.match(passwordRegex)) {
            passwordError.textContent = "Password should contain at least 8 characters including one uppercase letter, one lowercase letter, one number, and one special character.";
            isValid = false;
        }
    }

    // Confirm password validation
    if (confirmPassword.trim() === "") {
        confirmPasswordError.textContent = "Confirm password cannot be empty";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    // Date of Birth validation
    if (dob.trim() === "") {
        dobError.textContent = "Date of Birth cannot be empty";
        isValid = false;
    } else {
       // Date of Birth validation
var today = new Date();
var eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
var dobDate = new Date(dob);

if (dobDate > eighteenYearsAgo) {
    dobError.textContent = "You must be 18 years or older.";
    isValid = false;
}
    }

    // Phone number validation
    if (phone.trim() === "") {
        phoneError.textContent = "Phone number cannot be empty";
        isValid = false;
    } else {
       // Phone number validation
        var phoneRegex = /^\+254\d{9}$/;
        if (!phone.match(phoneRegex)) {
            phoneError.textContent = "Please enter a valid Kenyan phone number starting with +254 followed by 9 digits.";
            isValid = false;
        }
    }

    // If all validations pass, show success message
    if (isValid) {
        alert('Sign up successful!\nWelcome, ' + username + '!');
    }

    // If any validation fails, prevent form submission
    return isValid;
}

const lessonContainer = document.querySelector('.lessons');
lessonContainer.innerHTML = fitnessClasses;

const hiddenMenu = document.querySelector('.desktop');

function openMenu() {
  hiddenMenu.classList.add('popup');
}

function closeMenu() {
  hiddenMenu.classList.remove('popup');
}

const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', openMenu);
const close = document.querySelector('.close');
close.addEventListener('click', closeMenu);
