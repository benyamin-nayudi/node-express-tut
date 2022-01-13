const express = require('express')
const path = require('path')



const app = express();

// * setup static assets and middleware
/// now we can use the app.use method to serve our static files more easily. first we should make a public folder and paste all of our static files (styles , svg and js files) then here we invoke this function.
// the common name for assets is public and those are files that the server doesn't have to change (img , style , js( the javascript file make the page dynamic and it doesn't have any issue with the server))
app.use(express.static('./public'))


//* now we want to send our index.html file so we can use the sendFile method of express and provide an absolute path for it , the index.html file is also an asset so we can move it in the public folder and by this we don't need to send it anymore and just using express.static middleware is enough for serving all of our static files.
// app.get('/' , (req , res) =>{
//     res.sendFile(path.resolve(__dirname , './navbar-app/index.html'))
// })





app.all("*" , (req , res) =>{
    res.status(404).send('page not found')
})


// so the guest here is how express helps us to handle serving static files . 
// it provides us a middleware , so we can simply dump our static files (img , js files , styles , html files ...) and use the app.use(express.static('./public')) function and by giving it the path of the public folder (the folder where we dump our static files) express does the rest functionalities









app.listen(5000 , () =>{
    console.log('server is running on port 5000...')
})