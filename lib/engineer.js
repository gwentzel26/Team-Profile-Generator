const Employee = require('./employee');

class Engineer extends Employee {

    constructor(name, ID, email, github) {
        super(name, ID, email, "Engineer");
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;