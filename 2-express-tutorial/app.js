const express = require('express')

const app = express()

// express middleware are functions that execute during the request to the server. each middleware has access to response and request object

//   req => middleware  => res 





app.listen(5000 , () =>{
    console.log('server running on port 5000 ....')
})
