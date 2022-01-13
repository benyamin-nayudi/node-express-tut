// we will listen for specific events and then fire specific callback functions
const EventEmitter = require('events')

// we first make an instant from our obj
const customEmitter = new EventEmitter()

// the emit has some methods . one of them is 'on' that listen for an event =>emit an event
// response => name of the event.
customEmitter.on('response' , () =>{
    console.log(`data received `)
})



// 1- you can define as many event listeners as you want 
// 2 -order matters : first listen to an event then we emit it
// here we are emitting our event and the name is the name we gave to our 'on' method.
customEmitter.emit('response')



customEmitter.on('response' , ( name , id)=>{
    console.log(`data received user ${name } with id: ${id}` )
})

//  3 - you can pass an arguments and receive them back in the 'on' method
customEmitter.emit('response' , 'john' , 23)





