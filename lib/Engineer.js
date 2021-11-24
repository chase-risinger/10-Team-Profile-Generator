const Employee = require('../lib/Employee')
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getRole = function () {
        return "Engineer";

    };
    getGithub = function () {
        return this.github;
    }
    generateSelfIntoHTMLStr = function () {
        `<div><h2>${this.name}</h2>
<a href = ${this.email}>Email</a>
<p>ID Number: ${this.id}</p>
<p>Employee type: ${this.type}</p>
<a href = "http://www.github.com/${this.github}">Github</p>
</div>`
    }
}

module.exports = Engineer;