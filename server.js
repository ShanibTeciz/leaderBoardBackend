const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT;
const URL= process.env.URL;
const app = require('./app')


app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
}) 
mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true }).then(()=>{
    console.log("db connected")
   
}
).catch((err)=>{
    console.log(err)
})

