const http = require("http");


const server = http.createServer();

// we can use the event emitter API to assign an event listener to the server function.
server.on('request' , (req , res) =>{
    res.end('welcome')
})

// even we haven't assign the emit method for the request event , a bunch of built in modules in node emit the server function

server.listen(5001)