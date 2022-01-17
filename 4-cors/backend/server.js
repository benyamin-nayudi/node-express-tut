const express = require('express')
const cors = require('cors')



const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods : ['POST' , 'GET']
}))

app.put('/homepage' , (req , res) =>{
    res.json({name : 'benyamin'})
})


app.listen(4000)
