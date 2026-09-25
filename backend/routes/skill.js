const express = require('express')
const router = express.Router()
const debug = require('debug')("development:Skill")

const dotenv = require('dotenv')
dotenv.configDotenv()

const authMiddleware = require('../MiddleWare/authMiddleWare.js');
const Skills = require('../model/skillSchema')

router.get('/', function (req, res) {
    res.send('hey')
})

router.post('/', authMiddleware, async function (req, res) {
    try {
        const { skillTitle, skillImages } = req.body

        if (!skillTitle || !skillImages) {
            return res.status(402).json({ message: 'Please Fill All Required Fields' })
        }
        const isMatch = await Skills.findOne({ skillTitle })
        if (isMatch) {
            return res.status(404).json({ message: 'Skill Already Exists' })
        } else {
            const addSkill = new Skills({
                skillTitle,
                skillImages
            })
            await addSkill.save()
            res.status(202).json({ data: addSkill, message: 'Add New Skill Successfully' })
        }
    } catch (error) {
        debug(error)
    }
})

router.get('/allSkill', async function (req, res) {
    const data = await Skills.find()
    res.status(202).json({ data: data })
})
router.delete('/delete/:id', async function (req, res) {
    try {
        const { id } = req.params;
        const deleteItem = await Skills.deleteOne({
            _id: id
        })
        res.status(200).json({
            deleteItem,
            message: 'Delete Skill Successfully'
        });
    } catch (error) {
        debug(error)
        res.status(500).json({
            message: 'Something went wrong'
        });
    }
})

module.exports = router
