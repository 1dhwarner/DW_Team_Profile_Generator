const htmlGenerator = function ({ manager, engineers, interns }) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href=dist/style.css">
    <title>Document</title>
</head>
<body>
    <header class="navbar navbar-expand-lg text-center">
    <h1>My Team</h1>
    </header>

    <main>
    <div class="card">
    <h2>${manager.getName()}</h2>
    <h2>${manager.getRole()}</h2>
    <h2>${manager.getOfficeNumber()}</h2>
    <h2><a href = "mailto:${manager.getEmail()}?subject = Contact = Message">${manager.getEmail()}</a><h2>
    </div>
   
  


    ${engineers.map(element => {
        return generateEngineer(element)
    }).join("")
        }

    ${interns.map(element => {
            return generateIntern(element)
        }).join("")
        }

    </main>



</body>
</html>
    
    `
}

const generateIntern = function (intern) {
    return `
    <div class="card">
    <div class="row>
    <h2>${intern.getName()}</h2>
    <h2>${intern.getRole()}</h2>
    <h3>${intern.getId()}</h3>
    <h3><a href="${intern.getEmail()}">${intern.getEmail()}</h3>
    <h3>${intern.getSchool()}</h3>
    </div>
    </div>
    `
}

const generateEngineer = function (engineer) {
    return `
    <div class="card">
    <h2>${engineer.getName()}</h2>
    <h2>${engineer.getRole()}</h2>
    <h3>${engineer.getId()}</h3>
    <h3><a href="${engineer.getEmail()}">${engineer.getEmail()}</h3>
    <h3>${engineer.getGithub()}</h3>
    </div>
    `
}


module.exports = { htmlGenerator };

//  // ${engineers.map(element => { return generateEngineer(element).join("") })}

    // ${interns.map(element => { return generateIntern(element).join("") })}