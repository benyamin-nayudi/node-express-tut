const logger = (req , res , next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method , url , time )

    next() // when you work with middleware you MUST pass on to the next middleware unless you want to stop the cycle.
    // res.send('finish here ') // we can terminate the whole cycle here.
}


module.exports = logger