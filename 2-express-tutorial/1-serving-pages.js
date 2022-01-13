const { readFileSync } = require("fs")
const http = require('http')

// getting the contents
const homePage = readFileSync('./navbar-app/index.html')


const server = http.createServer()

server.on('request' , (req, res) =>{
    
    // res.write('hello')

    //* we always want to end the response so it exits the process if not the browser waits for the end and doesn't stop  so we use .end() method and what it does is it give a signal that the communication is over...
    // res.end('hello world') 


    // //* we can give more info about the response with passing the headers:
    // //* the 200 here means that the response was successfully
    // //* if you set the content-type to text/plain , the <h1>hello world</h1> will be treated as plain text
    // res.writeHead( 200 , {"content-type" : 'text/plain' })
    // res.writeHead( 200 , {"content-type" : 'text/html' })

    // //* now we can send our html markup
    // res.write('<h1>home page</h1>')
    // res.end()

    // //* some of the request object methods:
    // console.log(res.url)
    // console.log(res.method)

    ////* so in a nutshell every page the user is try to access must have a response in the server side, so we can return a 404 header for pages that are not available and so on.

    // const url = req.url
    // if(url ==='/'){
    //     res.writeHead( 200 , {"content-type" : 'text/html' })
    //     res.write('<h1>home page</h1>')
    //     res.end()
    // }else if(url === '/about'){
    //     res.writeHead( 200 , {"content-type" : 'text/html' })
    //     res.write('<h1>about us</h1>')
    //     res.end()
    // }else{
    //     res.writeHead(404 , 'your page is not available')
    //     res.write('<h1>page not found</h1>')
    //     res.end()
    // }







    // //* we can require an html file and pass it as a response...
    const url = req.url
    if(url ==='/'){
        res.writeHead( 200 , {"content-type" : 'text/html' })
        res.write(homePage)
        res.end()
    }else if(url === '/about'){
        res.writeHead( 200 , {"content-type" : 'text/html' })
        res.write('<h1>about us</h1>')
        res.end()
    }else{
        res.writeHead(404 , 'your page is not available')
        res.write('<h1>page not found</h1>')
        res.end()
    }

    console.log(url) 
})

server.listen(5000)


















