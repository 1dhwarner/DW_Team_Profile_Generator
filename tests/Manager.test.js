const Manager = require('../lib/Manager');

const manager = new Manager('David', 1, 'david@mail.com', '103');

describe('Manager', () => {

    it('creates an Manager if a user submits the proper prompts', () => {
        expect(manager.getRole()).toEqual('Manager');
    });

    it('creates an Manager if a user submits the proper prompts', () => {
        expect(manager.getId()).toEqual(1);
    });

    it('gets Manager email', () => {
        expect(manager.getEmail()).toEqual('david@mail.com');
    });

    it('get Manager name', () => {
        expect(manager.getName()).toEqual('David');
    });

    it('get Manager gitOfficeNumber', () => {
        expect(manager.getSchool()).toEqual('103');
    });
})