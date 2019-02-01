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

const inquirer = require ('inquirer')

const questions = [
    {
        type: 'confirm',
        name: 'pokemonMaster',
        message: 'Are you a Pokemon Master?',
        default: 'false'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    }
]

inquirer.prompt(questions).then(answers => {
    if (questions.confirm) {
        console.log('\nWelcome ' + answers.name)
        console.log('You are a ' + answers.pokemonMaster + '!')
    }
    else {
        console.log('\nNo problem, ' + answers.name + ', train harder and come back when you are ready.\n')
    }
})