const Intern = require('../lib/Intern');

const intern = new Intern('David', 1, 'david@mail.com', 'DU');

describe('Intern', () => {

    it('creates an Intern if a user submits the proper prompts', () => {
        expect(intern.getRole()).toEqual('Intern');
    });

    it('creates an Intern if a user submits the proper prompts', () => {
        expect(intern.getId()).toEqual(1);
    });

    it('gets Intern email', () => {
        expect(intern.getEmail()).toEqual('david@mail.com');
    });

    it('get Intern name', () => {
        expect(intern.getName()).toEqual('David');
    });

    it('get Intern school', () => {
        expect(intern.getSchool()).toEqual('DU');
    });
})