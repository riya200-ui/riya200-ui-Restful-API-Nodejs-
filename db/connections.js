const mongoose = require('mongoose');
//this file ko mongo ko connect krna hai app.js se

//connect mongoodb with mongoose call krna
//deplicataion warning for after (,)
//connect give promese return so we have deal with
mongoose.connect('mongodb+srv://auth-11:auth@cluster0.hxsje.mongodb.net/leadgeneration?retryWrites=true&w=majority',
{useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true});

mongoose.connection.once('open', function(){
    console.log('connection has been made');
}).on('error', function(error){
    console.log('error is:', error);
});