const express = require('express')
const {products} = require('./data')

const app = express()


app.get('/' , (req ,res ) =>{
    res.send(`
    <h1>home page</h1> <a href="/api/products"> products </a>
    `)
}) 

app.get('/api/products' , (req , res) =>{
    const rewProducts = products.map(product => {
        const { id , image , name} = product
        return { id , image , name}
    })
    res.json(products)
})

app.get('/api/products/:productID' , (req , res)=>{

    const {productID} = req.params 
    const singleProduct = products.find(product => product.id === Number(productID))
    
    if(!singleProduct){
        return res.status(404).send('product does not exist')
    }
    res.json(singleProduct)
})


// we can get the query like this:  http://localhost:5000/api/v1/query?name=2
app.get('/api/v1/query' , (req , res) =>{
    console.log(req.query);
    const {search , limit} = req.query;
    let sortedProducts = [...products];

    // note that you must return 'one'  response from the server so keep in mind to write 'return' in your conditions 


    // here we check the search query and return product that start with the searched query
    if(search){
        sortedProducts = sortedProducts.filter( product =>{
            return product.name.startsWith(search)
        })
    }

    // here we are limiting our result array
    if(limit) {
        sortedProducts = sortedProducts.slice( 0 , Number(limit))
    }

    // here we send back a proper response when the status was OK but no product matched the query
    if(sortedProducts.length < 1 ) {
        // res.status(200).send('no products matched your search')
        return res.status(200).json({success: true , data: []})
    }

    res.status(200).json(sortedProducts)
   
})


app.listen(5000 , () =>{
    console.log('server running on port 5000 ....')
})


