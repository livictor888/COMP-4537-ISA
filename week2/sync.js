const { readFile, writeFile } = require('fs')


var x = ""
var y = ""

readFile('./t1.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  x = result

  readFile('./t2.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    y = result

    writeFile('./t3.txt', `${x}${y}`, (err) => {
      if (err) {
        console.log(err);
        return
      }
    })
  })
})