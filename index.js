// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

// Let's create a Twitter account for Node.

// - Name
// - Email address
// - Password
//  - Agree to terms of service
// - List of favorite topic
// - confirm at the end

const inquirer = require ('inquirer')

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'confirm',
        name: 'terms',
        message: 'Do you accept the terms of service?',
        default: 'false'
    },
]

inquirer.prompt(questions).then(answers => {

        console.log('\nWelcome ' + answers.name)
})