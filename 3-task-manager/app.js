require('./db/connect')

const express = require('express')
const tasks = require('./routes/tasks')

const app = express();

// middleware : if we don't use this we won't have our data in the req.body
app.use(express.json())



app.get('/hello' , (req , res) =>{
    res.send('task manager app')
})



app.use('/api/v1/tasks' , tasks)












const port = 3000;





app.listen(port , ()=>{
    console.log('server running on port 3000...')
})




