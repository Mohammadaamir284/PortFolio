const express = require('express')
const router = express.Router()
const debug = require('debug')("development:Product")

const Project = require('../model/projectSchema.js')


router.get('/', function (req, res) {
    res.send('hey')
})

router.post('/', async function (req, res) {
    try {
        const { title, description, imageUrl, mediaType, technologies, liveUrl, githubUrl, category, status } = req.body

        if (!title || !description || !imageUrl || !mediaType || !technologies || !liveUrl || !githubUrl || !category || !status) {
            return res.status(404).json({ message: 'Please Fill All Required Fields' })
        }
        else {
            const isAlreadyExist = await Project.findOne({ title, liveUrl })
            if (isAlreadyExist) {
                return res.status(400).json({ message: 'Project Already Exists' })
            }
            else {
                const addNewProject = new Project({
                    title,
                    description,
                    imageUrl,
                    mediaType,
                    technologies,
                    liveUrl,
                    githubUrl,
                    category,
                    status
                })
                await addNewProject.save()

                res.status(200).json({ data: addNewProject, message: 'Add New Project Successfully' })
            }
        }
    } catch (error) {
        debug(error)
    }
})



router.get('/allproject', async function (req, res) {
    const getProject = await Project.find()
    res.status(200).json({ data: getProject })
})

router.get('/:id', async function (req, res) {
    try {
        const { id } = req.params;
        const project = await Project.findById(id)
        res.status(200).json({ data: project, message: 'Find Project Successfully' })
    } catch (error) {
        debug(error)
        res.status(500).json({
            message: 'Something went wrong'
        });
    }
})

router.delete('/:id', async function (req, res) {
    try {
        const { id } = req.params;
        const deleteProject = await Project.deleteOne({
            _id: id
        })
        res.status(200).json({
            data: deleteProject,
            message: 'Find Project And Delete Successfully'
        })

    } catch (error) {
        debug(error)
        res.status(500).json({
            err: error,
            message: 'Something went wrong'
        });
    }
})

module.exports = router
