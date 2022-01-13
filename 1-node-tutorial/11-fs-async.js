// interacting with the file system
// we can do it synchronously and asynchronously

// these are async
const { readFile , writeFile } = require('fs')

// this is an async call of readFile module. it accepts a callBack function .
readFile('./content/first.txt' ,'utf8' , (err , result ) =>{
    if(err) {
        console.log(err)
        return ;
    }
    const first = result ;
    readFile('./content/second.txt' , 'utf8' , (err , result ) =>{
        if(err) {
            console.log(err)
            return ;
        }  
        const second = result 

        writeFile('./content/result-async.txt' ,`here is the result ${first }  , ${second}` , {flag: 'a'} , (err , result ) =>{
            if(err) return;
            
            console.log(result)
        } )
    })
})







