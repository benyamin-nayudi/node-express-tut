const { readFileSync } = require("fs")
const http = require('http')

// getting the contents
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer()


// now we can server our real files here.
// note: the css links and script are files that the html file will require (will get) and we must also provide them in our server . in order to do that we should make sure to change the content-type to the proper one.
server.on('request' , (req, res) =>{
  
    const url = req.url
    if(url ==='/'){
        res.writeHead( 200 , {"content-type" : 'text/html' })
        res.write(homePage)
        res.end()
    }
    // styles
    else if(url === '/styles.css'){
        res.writeHead( 200 , {"content-type" : 'text/css' })
        res.write(homeStyles)
        res.end()
    }
    // javascript 
    else if(url === '/browser-app.js'){
        res.writeHead( 200 , {"content-type" : 'text/javascript' })
        res.write(homeLogic)
        res.end()
    }
    // image/logo
    else if(url === '/logo.svg'){
        res.writeHead( 200 , {"content-type" : 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    }else{
        res.writeHead(404 , 'your page is not available')
        res.write('<h1>page not found</h1>')
        res.end()
    }

    console.log(url) 
})

server.listen(5000)


















