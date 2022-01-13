const http = require('http')
const fs = require('fs')


http.createServer( (req , res ) =>{
    // const text = fs.readFileSync('./content/big.txt' , 'utf8')
    // res.end(text)
    
    const fileStream = fs.createReadStream('./content/big.txt' , 'utf8')
    fileStream.on('open' , () =>{
        //pushing from read stream to write stream => we can read data in chunks and write data in chunks
        fileStream.pipe(res) 
    })

    fileStream.on('error' , (err ) =>{
        res.end(err)
    })


}).listen(5002)