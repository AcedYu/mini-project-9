const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  { type: 'input', message: 'what is your name?', name: 'name' },
  { type: 'input', message: 'what is your location?', name: 'location' },
  { type: 'input', message: 'what is your GitHub name?', name: 'gitHub' },
  { type: 'input', message: 'what is your LinkedIn name?', name: 'linkedIn' },
  { type: 'input', message: 'what is your email adress?', name: 'email' },
  { type: 'input', message: 'Please write a short description of yourself:', name: 'description' }
];

inquirer
  .prompt(questions)
  .then(response => {
    writeUp(response);
  });

const writeUp = (data) => {

  fs.writeFile("result.html", `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
          <style>
              .box {
                  border: 1px solid #000;
                  padding: 20px;
                  width: 500px;
                  margin: 0 auto;
                  margin-top: 20px;
                  text-align: center;
                  border-radius: 10px;
                  background-color: lightgrey
              }
          </style>
  </head>

  <body>
      <div class="box">
        <h1>${data.name}</h1>
        <p>${data.location}</p>
        <h2>${data.gitHub}</h2>
        <h2>${data.linkedIn}</h2>
        <h2>${data.email}</h2>
        <p>${data.description}</p>
      </div>
  </body>
  </html>
  `, err => console.log(err));
}