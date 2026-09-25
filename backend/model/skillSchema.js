const mongoos = require('mongoose')

const skillSchema = mongoos.Schema({
    skillTitle : {
        type: String,
        required: true
    },
    skillImages: {
        type: String,
        required: true
    }
})

const Skills = mongoos.model('skill', skillSchema)
module.exports = Skills
