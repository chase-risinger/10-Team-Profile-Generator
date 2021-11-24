const Employee = require('../lib/Employee')
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole = function () {
        return "Manager";

    };
    generateSelfIntoHTMLStr = function () {
        `<div><h2>${this.name}</h2>
<a href = ${this.email}>Email</a>
<p>ID Number: ${this.id}</p>
<p>Employee type: ${this.type}</p>
<p>Office Number: ${this.officeNumber}</p>
</div>`
    }
}

module.exports = Manager;