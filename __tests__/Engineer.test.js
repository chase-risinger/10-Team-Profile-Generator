const Engineer = require('../lib/Engineer.js');



test('creates a engineer object', () => {
    const engineer = new Engineer('Matthew', 15, 'MatthewDonky@gmail.com', 'matthew-donky');
    expect(engineer.name).toBe('Matthew');
    expect(engineer.email).toBe("MatthewDonky@gmail.com");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.getGithub()).toBe('matthew-donky');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getName()).toBe(engineer.name);
    expect(engineer.getId()).toBe(engineer.id);
    expect(engineer.getEmail()).toBe(engineer.email);
});