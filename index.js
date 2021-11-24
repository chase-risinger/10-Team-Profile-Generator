// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager');
const { writeFile, copyFile } = require('./src/generate-site');
// TODO: Create an array of questions for user input



const promptManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'manager',
                message: "What is the manager's name?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is manager's email?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is manager's id?",
            },
            {
                type: 'input',
                name: 'office',
                message: "What is manager's office number?",
            }
        ]);
};
const promptTeam = employeeData => {

    if (!employeeData.roster) {
        employeeData.roster = [];
    }

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'type',
                message: 'Add Engineer or Intern',
                choices: ['Engineer', 'Intern', 'Finished building team']
            },
            {
                type: 'input',
                name: 'name',
                message: "Enter the employee's name",
                when: (answers) => answers.type === 'Engineer' || answers.type === 'Intern'
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the employee's email",
                when: (answers) => answers.type === 'Engineer' || answers.type === 'Intern'
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter the employee's ID",
                when: (answers) => answers.type === 'Engineer' || answers.type === 'Intern'
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter the Intern's School",
                when: (answers) => answers.type === 'Intern'
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter the Engineer's github",
                when: (answers) => answers.type === 'Engineer'
            },
            {
                type: 'confirm',
                name: 'confirmTeam',
                message: "Are you sure your team is done?",
                when: (answers) => answers.type === 'Finished building team',
                default: false
            }
        ])
        .then(teamData => {
            employeeData.roster.push(teamData);
            if (teamData.confirmTeam) {
                return employeeData;
            }
            else {
                return promptTeam(employeeData)
            }

        })
}

promptManager()
    .then(promptTeam)
    .then(employeeData => {
        console.log(employeeData)
        return generateHTML(employeeData)
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });

/* emplRoster = []
promptManager().then((answers) => {
    const manager = new Manager(answers);
    //console.log(manager)
})
    .then(promptTeam).then((teamMates) => {
        teamMates.forEach(person => {
            if (person.type == "Engineer") {
                emplRoster.push(new Engineer(person))
            }
            else {
                emplRoster.push(new Intern(person))
            }
        })
    }) */

