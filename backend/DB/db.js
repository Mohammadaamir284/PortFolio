const mongoose = require('mongoose')
const dotenv = require('dotenv')
const debug = require('debug')("development:DB_Connection")
dotenv.configDotenv()

const myDB = process.env.MONGO_DB ;

const DB = mongoose.connect(myDB).then( ()=>{
    debug("DataBase connect Succesfully")
}).catch((err)=>{
    debug(err)
})

module.exports = DB