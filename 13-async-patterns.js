// event loop: what allows node.js to perform non-blocking I/O (input / output) operations

//  const {readFile} = require('fs')


//  const getText = (path) =>{
//      return new Promise((resolve , reject)  =>{
//          readFile(path , 'utf8' , (err , data ) =>{
//              if(err){
//                  reject(err)
//              }else{
//                  resolve(data)
//              }
//          })
//      }
// )}

// const start = async () =>{
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first , second)
//     } catch (error) {
//         console.log(error);
//     }

// }
// start()

// getText('./content/first.txt')
//     .then( res => console.log(res))
//     .catch(err => console.log(err))

//$ instead of these approach we can make our readFile a promise so it doesn't need to wrap it in another function to make it promise....



// const {readFile, writeFile} = require('fs')

// // with the util function we can make our function return promises 
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


// const start = async () =>{
//    try {
//        const first = await readFilePromise('./content/first.txt' , 'utf8')
//        const second = await readFilePromise('./content/second.txt' , 'utf8')
//        await writeFilePromise('./content/result-grenade.txt' , `this is awesome` + first)
//        console.log(first , second)
//    } catch (error) {
//        console.log(error);
//    }

// }
// start()


//$ the better approach is :

const {readFile, writeFile} = require('fs').promises

const start = async () =>{
   try {
       const first = await readFile('./content/first.txt' , 'utf8')
       const second = await readFile('./content/second.txt' , 'utf8')
       await writeFile('./content/result-grenade.txt' , `this is awesome` + first)
       console.log(first , second)
   } catch (error) {
       console.log(error);
   }

}
start()