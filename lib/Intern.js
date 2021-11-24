const Employee = require('../lib/Employee')
class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id)
        this.school = school;
    }

    getSchool = function () {
        return this.school;
    }
    getRole = function () {
        return "Intern";

    };
    generateSelfIntoHTMLStr = function () {
        `<div><h2>${this.name}</h2>
<a href = ${this.email}>Email</a>
<p>ID Number: ${this.id}</p>
<p>Employee type: ${this.type}</p>
<p>School: ${this.school}</p>
</div>`
    }

}

module.exports = Intern;