const mongoose = require('mongoose')



const connectionString = 'mongodb+srv://benyamin:591192@benyamincluster.9wfsm.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

mongoose.connect(connectionString , {
    useNewUrlParser: true , 
    useCreateIndex: true,
    useFindAndModify: false , 
    useUnifiedTopology : true
})
    .then(() => console.log('connected to the db...'))
    .catch(err => console.log(err))











