const express = require('express')
const cors = require('cors')
const app = express()
const cookieParesr = require('cookie-parser')
const debug = require('debug')("development:main")
const dotenv = require('dotenv')
dotenv.config()

const productDB = require('./routes/productDB.js')
const Admin = require('./routes/admin.js')
const Skills = require('./routes/skill.js')
const DB = require('./DB/db.js')

const port = process.env.FRONTEND_KEY

app.use(cors({
    origin: port ,
    credentials: true
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParesr())

app.use('/project' , productDB)
app.use('/admin' , Admin)
app.use('/skill' , Skills)

app.listen(3000  , function(){
       debug("Main route started");
})


