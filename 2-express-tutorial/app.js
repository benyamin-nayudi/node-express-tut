/* 
when it comes to use express you have two options:
    1- setup an API  => setting up an http interface to interact with the data(json). for this we use res.json() send proper data type and stringify our data

    2- SSR (server side rendering) => set up template and send back the entire html page . we use res.render() method for that.


    => API : the main idea behind api is that our server provides data and in the frontend app the dev can simply make an http request to use that data
*/


// const express = require('express')

// const app = express();

// //* the .json() method sends a JSON as a response. we can simply make an api like this. 
// app.get('/' , (req , res) =>{
//     res.json([{name : 'benyamin'} , {name : 'daniyal'}])
// })


// app.listen(5000 , () =>{
//     console.log('server is listening on port 5000...')
// })




//////////////////////////// use real file for api

const express = require('express')
const { products } = require('./data')

const app = express();

app.get('/' , (req , res) =>{
    res.json(products)
})


app.listen(5000 , () =>{
    console.log('server is listening on port 5000...')
})










