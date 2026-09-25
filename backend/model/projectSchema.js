const mongoose = require('mongoose')


const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true
    },

    mediaType: {
        type: String,
        required: true
    },

    technologies: [
        {
            type: String,
            trim: true
        }
    ],

    liveUrl: {
        type: String,
        trim: true
    },

    githubUrl: {
        type: String,
        trim: true
    },

    category: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["Completed", "In Progress"],
        default: "Completed"
    }
},{ timestamps: true }
)

const Project = mongoose.model("Project", projectSchema);
module.exports = Project
