const mongoose = require("mongoose")
const connectdb = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGOURI,{
            useNewUrlParser:true
        }) 
        console.log(`MongoDB Successfully Connected!`)
    } catch (error) {
        console.log(error.message) 
    }
}
module.exports=connectdb;