// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js')
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is employee's name?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is employee's email?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is employee's id?",
        },
        {
            type: 'list',
            name: 'employee-type',
            message: 'Specify Employee Type',
            choices: ['Manager', 'Intern', 'Engineer', 'General Employee']
        }
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ]).then(data => fs.writeFileSync('./index.html', generateHTML(data), err => {

    }))

};
promptUser()


