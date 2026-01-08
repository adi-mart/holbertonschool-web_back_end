import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data.trim().split('\n');
      const students = {};
      for (let i = 1; i < lines.length; i++) {
        const [firstname, , , field] = lines[i].split(',');
        if (!students[field]) students[field] = [];
        students[field].push(firstname);
      }
      resolve(students);
    });
  });
}
