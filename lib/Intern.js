const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        // super calls the parent constructor, in this case the Employee class 
        super(name, id, email);
    }
    getSchool() {
        return this.school;
    }
    getRol() {
        // read function that references itself (the class)
        return 'Intern';
    }
}

module.exports = Intern;