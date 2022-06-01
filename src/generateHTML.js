const htmlGenerator = function ({ manager, engineers, interns }) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
    <header class="header">
    <h1>My Team</h1>
    </header>

    <main>
    <div class="card">
    <div class="text">
    <h2>${manager.getName()}</h2>
    <h2>${manager.getRole()}</h2>
    <h2>${manager.getOfficeNumber()}</h2>
    <h2><a href = "mailto:${manager.getEmail()}?subject = Contact = Message">${manager.getEmail()}</a><h2>
    </div>
    </div>
   
  


    ${engineers.map(element => { return generateEngineer(element) }).join("")}

    ${interns.map(element => { return generateIntern(element) }).join("")}

    </main>



</body>
</html>
    
    `
}

const generateIntern = function (intern) {
    return `
    <main>
    <div class="card">
    <div class="text">
    <h2>${intern.getName()}</h2>
    <h2>${intern.getRole()}</h2>
    <h2>${intern.getSchool()}</h2>
    <h2><a href = "mailto:${intern.getEmail()}?subject = Contact = Message">${intern.getEmail()}</a><h2>
    </div>
    </div>
   
    `
}

const generateEngineer = function (engineer) {
    return `
    <main>
    <div class="card">
    <div class="text">
    <h2>${engineer.getName()}</h2>
    <h2>${engineer.getRole()}</h2>
    <h2><a href ="https://www.${engineer.getGithub()}">${engineer.getGithub()}</h2>
    <h2><a href = "mailto:${engineer.getEmail()}?subject = Contact = Message">${engineer.getEmail()}</a><h2>
    </div>
    </div>
    `
}


module.exports = { htmlGenerator };
