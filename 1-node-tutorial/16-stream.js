// streams : used to read and write sequentially (when we should handle data like continues source or big file)
// 1 - writeable 2 - readable 3 - duplex 4 - transform
// streams extend eventEmitter class => we can use events on it

// if you have a large file the readFile will not be a good choice ... . so you can use read streams.


// $ making a big file
// const {writeFileSync} = require('fs')

// for(let i = 0 ; i < 1000 ; i++){
//     writeFileSync('./content/big.txt' , `hello world ${i} \n` , {flag: 'a'})
// }



const { createReadStream } = require('fs')

// this function returns us a buffer of the file that it reads.
// this function accepts some arguments 
// the first one is the path that it should read a file from
// the second one is an object => you can change the default size of the chunks (default to 64kb) bu highWaterMark key
// and you can change the encoding 
//
const stream = createReadStream('../content/big.txt' , {highWaterMark : 90000 , encoding: 'utf8'})

stream.on('data' , (result )=>{
    console.log(result)
})

stream.on('error' , (err) =>{
    console.log(err)
})






