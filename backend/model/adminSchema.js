const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    adminKey: {
        type: String,
        required: true
    },
    adminPassword: {
        type: String,
        required: true
    },
    adminRole: {
        type: String,
        enum: ["admin"],
        required: true,
        default: "admin"
    }
})

const Admin = mongoose.model('admin' , adminSchema)
module.exports = Admin