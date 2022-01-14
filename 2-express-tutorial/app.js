// we can use express router to group the route together avoiding a body app file
// making a route folder and place our routes in it 
// then make another folder name controllers and place all of our functions in it
//  this is the MVC model for handling routes 


const express = require('express')
const app = express()

const people = require('./routes/people')
const login = require('./routes/auth')

// assets 
app.use(express.static('./methods-public'))

// this middleware give us access to the data from the html form
app.use(express.urlencoded({extended : false}))

// this one give us access to the parsed json data
app.use(express.json())

// we already have the base here so we can remove all of the /api/people in the people.js file
app.use('/api/people' , people )

app.use('/login' , login)



app.listen(5000 , () =>{
    console.log('server running on port 5000 ....')
})























