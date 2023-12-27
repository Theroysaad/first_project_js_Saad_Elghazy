// ### First Project JavaScript:

// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.

// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.

// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.

let choiceQuestion = prompt ("do you want to signing up , logging in or changing the password") ;
let signUp = choiceQuestion == 'sign up'

database = [
    {
        naMe : 'Omar Barkoka',
        email : 'omarbarkoka@',
        age : 20 ,
        password : ''
    }
]


// + If the user only writes "exit," they exit the current process, and the choice question is asked again.

while (choiceQuestion == 'exit') {
    choiceQuestion = prompt ("do you want to signing up , logging in or changing the password")
}
//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.

let askForName;
let specialCharacters = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/;
let numbers = /1234567890/;

let fullNameIsCorrect = false;

// this method validate full name 

const validateFullName = (enteredName) => { 
    let nameWithoutSpaces = enteredName.trim().replace(/\s/g, '');
    if (nameWithoutSpaces.length < 5) {
        askForName = prompt('Full name should be more than 5 characters')
        fullNameIsCorrect = false;
        return;
    }

    if (specialCharacters.test(enteredName) || numbers.test(enteredName)) {
        askForName = prompt('Full name should not contain special characters or numbers')
        fullNameIsCorrect = false;
        return;
    }

    fullNameIsCorrect = true;
}


askForName = prompt('enter your Full name')

while (!fullNameIsCorrect) {
    validateFullName(askForName);
}

askForName = askForName.trim().split(' ');

for (let index = 0; index < askForName.length; index++) {
    askForName[index] = askForName[index][0].toUpperCase() + askForName[index].slice(1).toLowerCase();
}

let fullName = askForName.toString().replace(/,/g, ' ')

console.log(fullName);


//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.




let askForEmail ;

let emailIsCorrect = false;

// this method validate email

const validateEmail = (enteredEmail) => { 
    let emailWithoutSpaces = enteredEmail.trim();
    if (/ /.test(emailWithoutSpaces)) {
        askForEmail = prompt('Remove spaces please')
        emailIsCorrect = false;
        return;
    }

    if (emailWithoutSpaces.length < 10) {
        askForEmail = prompt('Email should be more than 10 characters')
        emailIsCorrect = false;
        return;
    }

    if (!emailWithoutSpaces.includes('@')) {
        askForEmail = prompt('Email should contain @')
        emailIsCorrect = false;
        return;
    }

    database.forEach(element => {
        if (element.email === emailWithoutSpaces.toLowerCase()) {
            askForEmail = prompt('Email already exists, please enter another email')
            emailIsCorrect = false;
            return;
        }
    });

    emailIsCorrect = true;
}


askForEmail = prompt('Enter your email')

while (!emailIsCorrect) {
    validateEmail(askForEmail);
}

askForEmail = askForEmail.trim().toLowerCase();

let email = askForEmail 

console.log(email);

//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.

let askForAge ;
let ageIsCorrect = false;

// this method validate Age

const validateage = (enteredAge) => { 
    if (/ /.test(enteredAge)) {
        askForAge = prompt('Remove spaces please')
        ageIsCorrect = false;
        return;
    }
    if (enteredAge.length == 0 || enteredAge.length >= 3) {
        askForAge = prompt('age should contain two characteres')
        ageIsCorrect = false;
        return;
    }

    if (/\D/.test(enteredAge)) {
        askForAge = prompt('just numbers please')
        ageIsCorrect = false;
        return;
    }

    ageIsCorrect = true;
}

askForAge = prompt('enter your age :')

while (!ageIsCorrect) {
    validateage(askForAge);
}

age = askForAge;

console.log(age);

//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.

let askForPassword;
let characteres = /[@, #, -, +, *, /]/;


let passwordIsCorrect = false;

// this method validate Password 

const validatePassword = (enteredPassword) => { 
    let passwordWithoutSpaces = enteredPassword.trim();

        if (/ /.test(passwordWithoutSpaces)) {
        askForPassword = prompt('Remove spaces please')
        emailIsCorrect = false;
        return;
    }
    if (passwordWithoutSpaces.length < 7) {
        askForPassword = prompt('password should be more than 7 characters')
        passwordIsCorrect = false;
        return;
    }

    if (!characteres.test(enteredPassword)) {
        askForPassword = prompt('password should  contain special characters ')
        passwordIsCorrect = false;
        return;
    }

    passwordIsCorrect = true;
}

askForPassword = prompt('enter your Full password')

while (!passwordIsCorrect) {
    validatePassword(askForPassword);
}

let password = askForPassword

console.log(password);


//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.

let Password_confirmed = prompt('confirm your password') ;

if (Password_confirmed != password) {
    alert('your have one last chance')
    Password_confirmed = prompt('confirm your password')
} else if (Password_confirmed == password) {
    alert (' you are singed in')
}







//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.
            
//             # Password:
//             - Check if the entered password is associated with the previously entered email.

//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             # History:
//             - Ability to view the entire transaction history.