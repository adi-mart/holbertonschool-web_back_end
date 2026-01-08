const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let output = '';
  const originalConsoleLog = console.log;
  console.log = (msg) => { output += msg + '\n'; };
  countStudents(process.argv[2]).then(() => {
    console.log = originalConsoleLog;
    res.send('This is the list of our students\n' + output.trim());
  }).catch((error) => {
    console.log = originalConsoleLog;
    res.send(`This is the list of our students\n${error.message}`);
  });
});

app.listen(1245);

module.exports = app;
