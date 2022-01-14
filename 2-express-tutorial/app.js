const express = require('express')
const app = express()
let { people } = require('./data')

// assets 
app.use(express.static('./methods-public'))

// parse form data (parse that value and add it to the req body)
app.use(express.urlencoded({extended : false}))

// we have json and this is a middleware to handle that
app.use(express.json())


// http methods
// get
app.get('/api/people' , (req , res) =>{
    res.status(200).json({success : true , data : people})
})

app.post('/api/people' , (req , res ) =>{
    const {name} = req.body

    if(!name){
        return res.status(400).json({success :false , msg: 'please provide name value'})
    }
    res.status(201).json({})
})



app.post('/login' , (req , res) =>{
    // we can access the parsed data (the urlencoded has parsed it )
    // console.log(req.body)

    const {name }= req.body
    if(name) {
        return res.status(200).send(`welcome ${name}`)
    }else{
        res.status(401).send("please provide info.")

    }
})










app.listen(5000 , () =>{
    console.log('server running on port 5000 ....')
})
