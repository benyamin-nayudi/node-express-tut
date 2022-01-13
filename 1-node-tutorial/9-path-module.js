const path = require('path')
// console.log(path)


// return the file system path separator
console.log(path.sep)

// normalized and join a path with the system separator 
const filePath = path.join('/content' , 'subfolder' , 'text.txt')
console.log(filePath)

// return the base name of the path
const base = path.basename(filePath)
console.log(base)


// the __dirname return the absolute path to this current file
// the path.resolve return an absolute path to us
const absolute = path.resolve(__dirname , 'content' , 'subfolder' , 'test.txt')
console.log(absolute)






