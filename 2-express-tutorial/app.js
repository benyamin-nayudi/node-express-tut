const express = require('express')
const logger = require('./8-logger')
const authorize = require('./11-authorize')

const app = express()

// this is how we set multiple middleware functions . the order matters.
app.use([logger , authorize])





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
    // here we can get the attached object from the authorized file.
    console.log(req.user)
    res.send('items')
})

app.listen(5000 , () =>{
    console.log('server running on port 5000 ....')
})
