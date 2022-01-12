// const http = require('http')
// console.log(http)

// req => incoming request from client
// res => what we sending back
// const server = http.createServer( (req , res) =>{

    // write method will write in the webpage
    // res.write('welcome to our home page')

    // end() function is used to end the response process. you can also give it a data 
    // res.end('benyamin')
// })

// what port will our server listen to.
// server.listen(5001)


////////////////////////////// checking the url/////////////////////////////////////


const http = require('http')

// we can manage the url queries like this
const server = http.createServer((req , res ) =>{
    if(req.url === '/'){
        res.end('welcome to the home page')
    }else if(req.url === '/about'){
        res.end('here is our short history')
    }else{
        // and we can write a default end() for urls that are not available
        res.end('hii')
    }

   
})

server.listen(5001)








