const Employee = require('./employee')

// create unit tests based off each new method created below

class Intern extends Employee {
    constructor(name, id, email, school) {
        // super calls the parent constructor, in this case the Employee class 
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        // read function that references itself (the class)
        return 'Intern';
    }
}

module.exports = Intern;