const { readFile, writeFile, write } = require('fs')


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





const start = async () => {
  var x = "rubbish"
  var y = "rubbish"
  try {
    x = await getText('./t1.txt')
    console.log(x);
    y = await getText('./t2.txt')
    console.log(y);
  }
  catch (err) {
    console.log(err);
  }
  writeFile('./t3.txt', `${x}${y}`, (err) => { if (err) console.log(err); })
}

start()