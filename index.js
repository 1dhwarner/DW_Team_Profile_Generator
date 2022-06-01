const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML.js');
const { default: generate } = require('@babel/generator');

// the team object that will be logged to the console once the prompts collect all user information
let team = {
    manager: "",
    interns: [],
    engineers: [],
};

const menuPrompt = function () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menuSelection',
            message: "Let's build a team! Who would you like to add first?",
            choices: [
                'Intern',
                'Engineer',
                'Finish!'
            ],
        },
    ])
        .then(function (selection) {
            // using a switch case, similar to last assignment's inquirer + switch case 
            switch (selection.menuSelection) {
                case 'Intern':
                    internPrompt();
                    break;
                case 'Engineer':
                    engineerPrompt();
                    break;
                case 'Finish!': finish();
                    break;
            }
        });
};

const managerPrompt = function () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter the name for the manager of this team, kind stranger.',
            name: 'nameManager'
        },
        {
            type: 'input',
            message: "Please enter the team manager's email.",
            name: 'emailManager'
        },
        {
            type: 'input',
            message: "Please enter the team manager's office number.",
            name: 'officeManager'
        },
        {
            type: 'input',
            message: "Please enter the team manager's unique ID.",
            name: 'idManager'
        }
    ]).then(function (answers) {
        team.manager = new Manager(answers.nameManager, answers.idManager, answers.emailManager, answers.officeManager);
        menuPrompt();
    });
};

const internPrompt = function () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter the name of this intern, kind stranger.',
            name: 'nameIntern'
        },
        {
            type: 'input',
            message: "Please enter the intern's email.",
            name: 'emailIntern'
        },
        {
            type: 'input',
            message: "Please enter the name of the school that this intern attends.",
            name: 'schoolIntern'
        },
        {
            type: 'input',
            message: "Please enter the name of the intern's unique employee ID.",
            name: 'idIntern'
        }
    ]).then(function (answers) {
        // order matters here!! 
        team.interns.push(new Intern(answers.nameIntern, answers.idIntern, answers.emailIntern, answers.schoolIntern));
        menuPrompt();
    });
};

const engineerPrompt = function () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter the name of this engineer, kind stranger.',
            name: 'nameEngineer'
        },
        {
            type: 'input',
            message: "Please enter the engineer's email.",
            name: 'emailEngineer'
        },
        {
            type: 'input',
            message: "Please enter the engineer's github.",
            name: 'githubEngineer'
        },
        {
            type: 'input',
            message: "Please enter the name of the engineer's unique employee ID.",
            name: 'idEngineer'
        }
    ]).then(function (answers) {
        team.engineers.push(new Engineer(answers.nameEngineer, answers.idEngineer, answers.emailEngineer, answers.githubEngineer));
        menuPrompt();
    });
};

// Using fs.writeFileSync in a similar function to the previous hw assignment 
const finish = () => {
    console.log('team: ', team);
    fs.writeFileSync('./dist/team.html', generateHTML.htmlGenerator(team));
};

// start with manager prompt, collect info, then move to menu prompt
managerPrompt();

