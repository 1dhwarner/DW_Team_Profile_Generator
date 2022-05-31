const Employee = require('../lib/Employee');

const employee = new Employee('David', 1, 'david@mail.com');

describe('Employee', () => {
    it('get an employee if a user submits the proper prompts', () => {
        expect(employee.getRole()).toEqual('Employee');
    });

    it('gets an employee if a user submits the proper prompts', () => {
        expect(employee.getId()).toEqual(1);
    });

    it('gets employee email', () => {
        expect(employee.getEmail()).toEqual('david@mail.com');
    });

    it('get employee name', () => {
        expect(employee.getName()).toEqual('David');
    });

})