const express = require('express')
const logger = require('./8-logger')
const authorize = require('./11-authorize')

const app = express()

// this is how we set multiple middleware functions . the order matters.
// app.use([logger , authorize])



// we can add our middleware like this
//& app.get('/' ,[logger , authorize] , (req , res) =>{
//     res.send('Home')
// })

// express does have some built it middleware . an example of this is :
//& app.use(express.static('./public'))

// third party middleware : morgan => logs the method , route , time spend that server return response
const morgan = require('morgan')
app.use(morgan('tiny'))






app.get('/' , (req , res) =>{
    res.status(200).send('Home')
})

app.get('/about'  , (req , res) =>{
    res.send('about')
})

app.get('/api/products'  , (req , res) =>{
    res.send('products')
})

app.get('/api/items'  , (req , res) =>{
    // here we can get the attached object from the authorized file.
    // console.log(req.user)
    res.send('items')
})

app.listen(5000 , () =>{
    console.log('server running on port 5000 ....')
})
