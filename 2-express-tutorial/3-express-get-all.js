const express = require('express')

const app = express();



//* we have some methods that we use the most:
// app.get(path , callback (invoked every time the user perform a get request))
// we can add our status here and chain it.
app.get('/' , (req , res) =>{
    res.status(200).send('home page')
})

app.get('/about' , (req , res) =>{
    res.status(200).send('about page')
})




//* this handles all http request (get , post ...)
// app.all(path (* : all) , callback ) => if i can not reach the resource so i send back this.
app.all("*" , (req , res) =>{
    res.status(404).send('<h1>page not found</h1>')
})

// app.post
// app.put
// app.all
// app.delete
// app.use



app.listen(5000 , () =>{
    console.log('server is listening on port 5000...')
})









