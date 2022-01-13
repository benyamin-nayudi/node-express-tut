const express = require('express')

const app = express()

// express middleware are functions that execute during the request to the server. each middleware has access to response and request object

//   req => middleware  => res 

// we can make a separated file for it
// const logger = (req , res , next) =>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method , url , time )

//     next() // when you work with middleware you MUST pass on to the next middleware unless you want to stop the cycle.
//     // res.send('finish here ') // we can terminate the whole cycle here.
// }

const logger = require('./8-logger')

// here how we can use our middleware.
app.get('/' , logger, (req , res) =>{
    res.send('Home')
})

app.get('/about' , logger , (req , res) =>{
    res.send('about')
})

app.listen(5000 , () =>{
    console.log('server running on port 5000 ....')
})
