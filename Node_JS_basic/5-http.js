const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);

        if (students.length === 0) {
          reject(new Error('Cannot load the database'));
          return;
        }

        let output = `Number of students: ${students.length}\n`;

        const fields = {};

        students.forEach((line) => {
          const [firstname, , , field] = line.split(',');

          if (firstname && field) {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstname);
          }
        });

        const fieldOutputs = [];
        Object.keys(fields).forEach((field) => {
          const studentList = fields[field];
          fieldOutputs.push(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        });

        output += fieldOutputs.join('\n');
        resolve(output);
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    const databasePath = process.argv[2];

    countStudents(databasePath)
      .then((output) => {
        res.end(output);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
