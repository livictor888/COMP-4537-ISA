const fs = require('fs');

// Read the contents of a file
fs.readFile('./t1.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
  console.log("bye!");
});

console.log("hello");

// Write to a file
fs.writeFile('t3.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('File written.');
});