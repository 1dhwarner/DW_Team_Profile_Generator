const Engineer = require('../lib/Engineer');

const engineer = new Engineer('David', 1, 'david@mail.com', 'github.com/1dhwarner');

describe('Engineer', () => {

    it('creates an engineer if a user submits the proper prompts', () => {
        expect(engineer.getRole()).toEqual('Engineer');
    });

    it('creates an engineer if a user submits the proper prompts', () => {
        expect(engineer.getId()).toEqual(1);
    });

    it('gets engineer email', () => {
        expect(engineer.getEmail()).toEqual('david@mail.com');
    });

    it('get engineer name', () => {
        expect(engineer.getName()).toEqual('David');
    });

    it('get engineer github', () => {
        expect(engineer.getGithub()).toEqual('github.com/1dhwarner');
    });
})