// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager');
// TODO: Create an array of questions for user input

let listOfEmployees = [];
let htmlStr = '';

const promptUser = () => {
    return inquirer
        .prompt([
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
                name: 'type',
                message: 'Specify Employee Type',
                choices: ['Manager', 'Intern', 'Engineer', 'General Employee']
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter the Intern's School",
                when: (answers) => answers.type === 'Intern'
            },
            {
                type: 'input',
                name: 'office',
                message: "Enter the Manager's Office Number",
                when: (answers) => answers.type === 'Manager'
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter the Engineer's github",
                when: (answers) => answers.type === 'Engineer'
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another employee?',
                default: false
            }
        ]
        )
        .then(indData => {
            if (indData.type = 'Manager') {
                let manager = new Manager(indData.name, indData.id, indData.email, indData.officeNumber);
                let x = manager.turnselfIntoHTMLStr();
                htmlStr = htmlStr + x;

            }
            else if (indData.type = 'Intern') {
                let intern = new Intern(indData.name, indData.id, indData.email, indData.school);
                let x = manager.turnselfIntoHTMLStr();
                htmlStr = htmlStr + x;

            }
            if (indData.type = 'Manager') {
                let manager = new Manager(indData.name, indData.id, indData.email, indData.officeNumber);
                let x = manager.turnselfIntoHTMLStr();
                htmlStr = htmlStr + x;

            }
            if (indData.type = 'Manager') {
                let manager = new Manager(indData.name, indData.id, indData.email, indData.officeNumber);
                let x = manager.turnselfIntoHTMLStr();
                htmlStr = htmlStr + x;

            }
            listOfEmployees.push(indData);
            if (indData.confirmAddEmployee) {
                return promptUser();
            } else {
                return listOfEmployees;
            }
        }
        );

}


newArray = []

promptUser().then((arrayOfEmplObjs) => {
    for (var i = 0; i < arrayOfEmplObjs.length; i++) {
        newArray.push(`<div><h2>${arrayOfEmplObjs[i].name}</h2>
<p>${arrayOfEmplObjs[i].email}</p>
<p>id number: ${arrayOfEmplObjs[i].id}</p>
<p>Employee type: ${arrayOfEmplObjs[i].type}</p>
</div>`)
    }
}).then(why => { return newArray.join(',') }).then(data => fs.writeFileSync('./dist/index.html', generateHTML(data), err => { }))

