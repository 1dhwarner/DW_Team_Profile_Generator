const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // super calls the parent constructor, in this case the Employee class 
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }

    // read function that references itself (the class)
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer; 