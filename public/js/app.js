
class Client {
    constructor(name, email, age, password, amount, transactions) {
        this.name = name
        this.email = email
        this.age = age
        this.password = password
        this.amount = amount
        this.transactions = transactions
    }
}

class Transaction {
    constructor(type, amount){
        this.type = type
        this.amount = amount 
    }
}


let database = [
    {
        naMe : 'Omar Barkoka',
        email : 'omarbarkoka@',
        age : 20 ,
        password : ''
    }
]

// * sign in 

const signIn = ()=>{
    
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

let Password_confirmed = prompt('confirm your password') ;

if (Password_confirmed != password) {
    alert('your have one last chance')
    Password_confirmed = prompt('confirm your password')
} else if (Password_confirmed == password) {
    alert (' you are singed in')
}

let client1 = new Client (name, email, age, password, 1000, []) ;

database.push(client1) ;

// after sign in 
userChoiceSelection ()

}



//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

const ChangePassword = ()=> {
    console.log(database);

if (choiceQuestion = 'change password') {
    let enterYouExistingEmail = prompt('enter Your Existing Email')
    for (let index = 0; index < database.length; index++) {
        const element = database[index];
        if (element.email == enterYouExistingEmail) {
            let newPassword = prompt('enter new password')
            element.password = newPassword ;
            alert('the password is changed in your database')
            break
        } 
    }
}

// after changing the password
userChoiceSelection ()

}

// !   ----------    --------  -----      choices

const userChoiceSelection = () => {
    let userChoice = prompt('Please, choose between signing up (enter 1), logging in (enter 2), or changing the password (enter 3)')
    
    switch (userChoice.toString()) {
        case '1':
            signIn();
            break
        case '2':
            //logging();
            break
        case '3':
            ChangePassword();
            break
        case 'exit':
            userChoiceSelection();
            break
    }
}

userChoiceSelection()


//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.
            
//             # Password:
//             - Check if the entered password is associated with the previously entered email.

