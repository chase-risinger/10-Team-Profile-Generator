const Employee = require('../lib/Employee.js');


test('creates an employee object', () => {
    const employee = new Employee('Chase', 15, 'ccr10@gmail.com');

    expect(employee.name).toBe('Chase');
    expect(employee.email).toBe('ccr10@gmail.com');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.getRole()).toBe('Employee');
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
});