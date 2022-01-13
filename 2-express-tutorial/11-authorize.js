// so we here simply check if  the user is beny or not. if he is beny  we will add an object to the user property in the req object and then call the next() function to keep the cycle until the next middleware. if not we just send and error

const authorize = (req , res  , next) =>{
    const { user } = req.query;

    if(user === 'beny'){
        // here we are attaching our object to the request object and we can for example get it in the item route
        req.user = {name : 'benyamin' , id : 3}
        next()
    }else{
        res.status(401).send('Unauthorized')
    }
}
module.exports = authorize