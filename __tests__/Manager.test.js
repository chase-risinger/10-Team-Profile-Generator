const Manager = require('../lib/Manager.js');



test('creates a manager object', () => {
    const manager = new Manager('Matthew', 15, 'MatthewDonky@gmail.com', 20);
    expect(manager.name).toBe('Matthew');
    expect(manager.email).toBe("MatthewDonky@gmail.com");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toBe('Manager');
    expect(manager.getName()).toBe(manager.name);
    expect(manager.getId()).toBe(manager.id);
    expect(manager.getEmail()).toBe(manager.email);
});