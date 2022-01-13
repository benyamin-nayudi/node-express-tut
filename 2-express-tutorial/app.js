const express = require('express')
const logger = require('./8-logger')


const app = express()

// we want to add our middleware to all of our routes. 
// app.use will invoke the given function to any routes
// note that the order matters here , so make sure to place the app.use (or your middleware functions ) first then write your routes methods
app.use(logger)

// you can also specify routes for your middleware . this one will only apply for routes that are after the '/api' route
app.use('/api' , logger)


app.get('/' , (req , res) =>{
    res.send('Home')
})

app.get('/about'  , (req , res) =>{
    res.send('about')
})

app.get('/api/products'  , (req , res) =>{
    res.send('products')
})

app.get('/api/items'  , (req , res) =>{
    res.send('items')
})

app.listen(5000 , () =>{
    console.log('server running on port 5000 ....')
})
