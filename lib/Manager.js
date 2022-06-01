const Employee = require('./employee')

// create unit tests based off each new method created below

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // super calls the parent constructor, in this case the Employee class 
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

    // read function that references itself (the class)
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;