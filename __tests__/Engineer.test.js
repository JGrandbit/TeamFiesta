const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should assign a given string to gitHub via constructor', () => {
        const gitHub = 'gititjuan';
        const newEngineer = new Engineer('Juan', 456, 'juan@email.com', gitHub);
        expect(newEngineer.gitHub).toBe(gitHub);
    });
});

describe('getGitHub', () => {
    it('should return the gitHub user name of Engineer', () => {
        const gitHub = 'gitiitjuan';
        const newEngineer = new Engineer('Juan', 456, 'juan@email.com', gitHub);
        expect(newEngineer.getGitHub()).toBe(gitHub);
    });
});

describe('getRole', () => {
    it('should return Engineer', () => {
        const role = 'Engineer';
        const newEngineer = new Engineer('Juan', 456, 'juan@email.com', 'gititjuan');
        expect(newEngineer.getRole()).toBe(role);
    });
});