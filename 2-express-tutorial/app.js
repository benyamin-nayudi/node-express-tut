const express = require('express')
const path = require('path')



const app = express();

// * setup static and middleware
/// now we can use the app.use method to serve our static files more easily. first we should make a public folder and paste all of our static files (styles , svg and js files) then here we invoke this function.
app.use(express.static('./public'))


// now we want to send our index.html file so we can use the sendFile method of express and provide an absolute path for it 
app.get('/' , (req , res) =>{
    res.sendFile(path.resolve(__dirname , './navbar-app/index.html'))
})





app.all("*" , (req , res) =>{
    res.status(404).send('page not found')
})












app.listen(5000 , () =>{
    console.log('server is running on port 5000...')
})