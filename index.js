const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML.js');
const { default: generate } = require('@babel/generator');

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
            console.log(selection)
            switch (selection.menuSelection) {
                case 'Intern':
                    console.log('YEUH');
                    internPrompt();
                    console.log('line 44');
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
        team.manager = new Manager(answers.nameManager, answers.emailManager, answers.officeManager, answers.idManager);
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
            message: "Please enter th name of the school that this intern attends.",
            name: 'schoolIntern'
        },
        {
            type: 'input',
            message: "Please enter the name the team manager's unique employee ID.",
            name: 'idIntern'
        }
    ]).then(function (answers) {
        team.interns.push(new Intern(answers.nameIntern, answers.emailIntern, answers.schoolIntern, answers.idIntern));
        menuPrompt();
    });
};

const engineerPrompt = function () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter the name of this intern, kind stranger.',
            name: 'nameEngineer'
        },
        {
            type: 'input',
            message: "Please enter the intern's email.",
            name: 'emailEngineer'
        },
        {
            type: 'input',
            message: "Please enter the name the engineer's github.",
            name: 'githubEngineer'
        },
        {
            type: 'input',
            message: "Please enter the name the team manager's unique employee ID.",
            name: 'idEngineer'
        }
    ]).then(function (answers) {
        team.engineers.push(new Engineer(answers.nameEngineer, answers.emailEngineer, answers.schoolEngineer, answers.idEngineer));
        menuPrompt();
    });
};

// const finish = () => {
//     managerPrompt()
//         .then((team) => fs.writeFileSync('./dist/team.html', generateHTML.htmlGenerator(team)))
//         .then(() => console.log('Successfully generated a ReadMe'))
//         .catch((err) => console.error(err));
// }

const finish = () => {
    console.log('team: ', team);
    fs.writeFileSync('./dist/team.html', generateHTML.htmlGenerator(team));
    // .then(() => console.log('Successfully generated a ReadMe'))
    // .catch((err) => console.error(err));

};

managerPrompt();

