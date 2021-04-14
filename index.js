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
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
      <title>Document</title>
  </head>

  <body>
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${data.name}
      </div>
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.location}</p>
        <p class="card-text">${data.gitHub}</p>
        <p class="card-text">${data.linkedIn}</p>
        <p class="card-text">${data.email}</p>
        <p class="card-text">${data.description}</p>
      </div>
    </div>
  </body>
  </html>
  `, err => console.log(err));
}