const htmlGenerator = function ({ manager, engineers, interns }) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    // links
</head>
<body>
    <header>
    <h1>My Team</h1>
    </header>

    <main>
    <article class="card">
    <h2>${manager.getName()}</h2>
    <h2>${manager.getRole()}</h2>
    <h3>${manager.getId()}</h3>
    <h3>${manager.getEmail()}</h3>
    <h3>${manager.getOfficeNumber()}</h3>
    </article>

  


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
    <article class="card">
    <h2>${intern.getName()}</h2>
    <h2>${intern.getRole()}</h2>
    <h3>${intern.getId()}</h3>
    <h3>${intern.getEmail()}</h3>
    <h3>${intern.getSchool()}</h3>
    </article>
    `
}

const generateEngineer = function (engineer) {
    return `
    <article class="card">
    <h2>${engineer.getName()}</h2>
    <h2>${engineer.getRole()}</h2>
    <h3>${engineer.getId()}</h3>
    <h3>${engineer.getEmail()}</h3>
    <h3>${engineer.getGithub()}</h3>
    </article>
    `
}


module.exports = { htmlGenerator };

//  // ${engineers.map(element => { return generateEngineer(element).join("") })}

    // ${interns.map(element => { return generateIntern(element).join("") })}