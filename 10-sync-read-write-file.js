// interacting with the file system
// we can do it synchronously and asynchronously

const { readFileSync , writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt' ,'utf8')
const second = readFileSync('./content/second.txt' ,'utf8')
console.log(first , second)


// if the file was there it will overwrite it and if it wasn't it will create one
// the {flag: 'a'} make node to append the files not overwriting them
writeFileSync('./content/result-sync.txt' , `here is the result ${first }  , ${second}` , {flag: 'a'})








