const fs = require('fs')
const inquirer= require('inquirer')
const generateHTML = require ('./stuff/generateHTML.js')
const questions = [
    {
        type: 'input',
        message: "What's your name?",
        name: 'person',
    },
    {
        type: 'input',
        message: "Where are you right now?",
        name: 'place',
    },
    {
        type: 'input',
        message: "What's your favorite color",
        name: 'color',
    },
    {
        type: 'input',
        message: "last movie you saw",
        name: 'movie',
    },
    {
        type: 'input',
        message: "Whats your favorite time of the day",
        name: 'day',
    },
    {
        type: 'input',
        message: "What's your github url?",
        name: 'github',
    },
    {
        type: 'input',
        message: "What's your LinkedIn url",
        name: 'linkedIn',
    }
]

function init(){
    inquirer.prompt(questions).then(function(answers){
     const htmlData = generateHTML(answers)
     fs.writeFile('index.html', htmlData, function (err){
        if (err){console.log(err)}
        else {console.log("Don't have to much fun")}
    })
 }
   )
}

init();