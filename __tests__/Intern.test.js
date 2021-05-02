const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should assign a given string to school via constrcutor', () => {
        const school = 'UO';
        const newIntern = new Intern('Lily', 789, 'lily@email.com', school);
        expect(newIntern.school).toBe(school);
    });
});

describe('getSchool', () => {
    it('should return the school of Intern', () => {
        const school = 'UO';
        const newIntern = new Intern('Lily', 789, 'lily@email.com', school);
        expect(newIntern.getSchool()).toBe(school);
    });
});

describe('getRole', () => {
    it('should return Intern', () => {
        const role = 'Intern';
        const newIntern = new Intern('Lily', 789, 'lily@email.com', 'UO');
        expect(newIntern.getRole()).toBe(role);
    });
});