class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    getName = function () {
        // code will go here
        return this.name;

    };

    getId = function () {
        return this.id;

    };

    getEmail = function () {
        return this.email;

    };
    getRole = function () {
        return "Employee";

    };
    generateSelfIntoHTMLStr = function () {
        `<div><h2>${this.name}</h2>
<a href = ${this.email}>Email</a>
<p>ID Number: ${this.id}</p>
<p>Employee type: ${this.type}</p>
</div>`
    }
};

module.exports = Employee;