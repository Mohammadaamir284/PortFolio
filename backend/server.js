const express = require('express')
const cors = require('cors')
const app = express()
const cookieParesr = require('cookie-parser')
const debug = require('debug')("development:main")

const productDB = require('./routes/productDB.js')
const Admin = require('./routes/admin.js')
const Skills = require('./routes/skill.js')
const DB = require('./DB/db.js')

app.use(cors({
    origin: 'http://localhost:5173',
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


