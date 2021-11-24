const Intern = require('../lib/intern.js');



test('creates a intern object', () => {
    const intern = new Intern('Matthew', 15, 'MatthewDonky@gmail.com', "University of Texas");
    expect(intern.name).toBe('Matthew');
    expect(intern.email).toBe("MatthewDonky@gmail.com");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.getSchool()).toBe("University of Texas");
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toBe(intern.id);
    expect(intern.getEmail()).toBe(intern.email);
});