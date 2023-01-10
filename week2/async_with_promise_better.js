const { readFile, writeFile } = require('fs')


const getText = (fName) => {
  return new Promise((resolve, reject) => {
    readFile(fName, 'utf-8', (err, result) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(result)
      }
    })
  })
}

var x = ""
var y = ""

getText('./t1.txt')
  .then((result) => {
    x = result
    return getText('./t2.txt')
  })
  .then((result) => {
    y = result
    // console.log(result);
    writeFile('./t3.txt', `${x}${y}`, (err) => { if (err) console.log("write" + err); })
  })
  .catch((err) => { console.log("catch" + err); })