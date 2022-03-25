const inquirer = require(`inquirer`);
// const fs = require (`fs`);
// const generatePage = require("./src/page-template");
// const pageHTML = generatePage(name,github);

// fs.writeFile("./index.html", pageHTML, err => {
//   if (err) throw err;
//   console.log('Portfolio complete check html');
// });
inquirer.prompt ([
  {
    type:'input',
    name: 'Name',
    message:'Whats is your name?'
  }
])
.then (answers => console.log(answers));
