const express = require('express')
const {products} = require('./data')

const app = express()



app.get('/' , (req ,res ) =>{
    res.send(`
    <h1>home page</h1> <a href="/api/products"> products </a>
    `)
})


app.get('/api/products' , (req , res) =>{

    // here we are deleting the description part of the api . (being selective about our data)
    const newProducts = products.map( product => {
        const {id , name , image} = product
        return {id , name , image}
    })
    res.json(newProducts)
})

// here we try to access one product . but there is a better way => using params
// app.get('/api/products/1' , (req , res ) =>{

//     const singleProduct = products.find(product => product.id === 1)

//     res.json(singleProduct)
// })



app.get('/api/products/:productID' , (req , res)=>{
    // we can use params to access the route parameter. remember that to change it to number because it is string
    // console.log(req.params)

    const {productID} = req.params 
    const singleProduct = products.find(product => product.id === Number(productID))
    
    if(!singleProduct){
        return res.status(404).send('product does not exist')
    }
    res.json(singleProduct)
})


// some queries may become complicated...
app.get('/api/products/:productsID/review/:reviewID' , (req ,res) =>{
    // ... do some thing
})




app.listen(5000 , () =>{
    console.log('server running on port 5000 ....')
})