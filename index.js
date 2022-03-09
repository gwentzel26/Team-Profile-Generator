const {prompt} = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const allEmployeeData = []
const managerPrompt = [
    {
        message: "What is the manager's name?",
        name: "managerName",
        type: "input"
    }, 
    {
        message: "What is the manager's id number?",
        name: "id",
        type: "input"
    },
    {
        message: "What is the manager's email?",
        name: "email",
        type: "input"
    },
    {
        message: "What is the manager's office number?",
        name: "officeNumber",
        type: "input"
    }
];

const employeePrompt = [
    {
        message: "What is the role of the employee you want to add?",
        name: "role",
        type: "list",
        choices: ["Engineer", "Intern"]
    }, 
    {
        message: (answers)=> `What is the name of the ${answers.role}?`,
        name: "name",
    }, {
        message: (answers)=> `What is the id of the ${answers.role}?`,
        name: "id",
    },
    {
        message: (answers)=> `What is the email of the ${answers.role}?`,
        name: "email",
    }, 
    {
        message: (answers)=> {
            if(answers.role === 'Engineer') return 'What is the github name of the engineer?'
            return 'What is the school this intern graduated from?'
        },
        name: "extra",
    }
]



//main function
function addEmployee(){
    prompt({
        message: "What do you want to do?",
        type: "list",
        name: "choice",
        choices: ["Add an employee", "Finish HTML"]
    }).then(data => {
        console.log("YOUR CHOICE --- ", data.choice);
        if(data.choice === "Add an employee"){
            prompt(employeePrompt)
            .then(data => {
                console.log("answers for employee --- ", data);
                if(data.role === "Engineer"){
                    const emp = new Engineer(data.name, data.id, data.email, data.extra);
                    allEmployeeData.push(emp)
                }else{
                    const emp = new Intern(data.name, data.id, data.email, data.extra);
                    allEmployeeData.push(emp)
                }

                console.log(`${data.role} added to team!`);
                setTimeout(addEmployee, 1500);
            })
        }else{
            createHTML()
        }
    })
}

function createHTML(){
   
    console.log("CREATING HTML!!!!!");
    console.log("ALL YOUR EMPLOYEES ---- ", allEmployeeData);

    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
<header>
    <h1>My Team</h1>
</header>

<main>
  <div class="container">
    ${allEmployeeData.map(employee => employee.generateHTMLCard(employee.officeNumber || employee.github || employee.school)).join("\n")}
  </div>
</main>


</body>
</html>
    `

    //fs create the html file after html string is created
    fs.writeFileSync("./dist/output.html", html);
    console.log("HTML is now generated in the dist folder")
}


function main(){
    prompt(managerPrompt).then(data => {
        console.log(data);
        const manager = new Manager(data.managerName, data.id, data.email, data.officeNumber);
        allEmployeeData.push(manager);

        //prompt user to add another employee or finish HTML
        addEmployee();
    })
}

main();