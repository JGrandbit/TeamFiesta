const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should assign officeNumber via constrcutor', () => {
        const officeNumber = 150;
        const newManager = new Manager('Kelly', 123, 'kelly@email.com', officeNumber);
        expect(newManager.officeNumber).toBe(officeNumber);
    });
});

describe('getOfficeNumber', () => {
    it('should return Manager office number', () => {
        const officeNumber = 1;
        const newManager = new Manager('Kelly', 123, 'kelly@email.com', officeNumber);
        expect(newManager.getOfficeNumber()).toBe(officeNumber);
    });
});

describe('getRole', () => {
    it('should return Manager', () => {
        const role = 'Manager';
        const newManager = new Manager('Kelly', 123, 'kelly@email.com', 1);
        expect(newManager.getRole()).toBe(role);
    });
});