const express = require('express')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()
const debug = require('debug')("development:Admin")

const dotenv = require('dotenv')
dotenv.configDotenv()

const authMiddleware = require('../MiddleWare/authMiddleWare.js');
const Admin = require('../model/adminSchema.js')



router.post('/', async function (req, res) {
    try {
        const { adminKey, adminPassword, adminRol } = req.body
        if (!adminKey || !adminPassword || !adminRol) {
            return res.status(404).json({ message: 'Please Fill All Required Fields' })
        }
        else {
            const hashpass = await bcrypt.hash(adminPassword, 14)
            const CreateAdmin = new Admin({
                adminKey,
                adminPassword: hashpass,
                adminRol
            })
            await CreateAdmin.save()
            res.status(202).json({ message: 'Admin Create Successfully' })
        }

    } catch (error) {
        debug(error)
    }
})

router.post('/login', async function (req, res) {
    try {
        const { adminKey, adminPassword } = req.body;
        if (!adminKey || !adminPassword) {
            return res.status(400).json({ message: 'Please Fill All Required Fields' });
        }
        const AdminENV = process.env.ADMIN_KEY
        const JWT_KEY = process.env.JWT_KEY
        if (adminKey !== AdminENV) {
            return res.status(403).json({ message: "Access denied" })
        } else {
            const findAdmin = await Admin.findOne({ adminKey })

            const isMatch = await bcrypt.compare(adminPassword, findAdmin.adminPassword)

            if (!isMatch) {

                return res.status(400).json({ msg: "Invalid credentials" });
            }
            const myToken = JWT.sign(
                { id: findAdmin._id, keyword: adminKey },
                JWT_KEY,
                { expiresIn: '1h', algorithm: 'HS256', issuer: 'backend' }
            )
            res.cookie('token', myToken, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                path: "/",
                maxAge: 60 * 60 * 1000
            })
            return res.status(200).json({
                data: findAdmin,
                message: 'Login Successfully',
                token: myToken
            });
        }


    } catch (error) {
        debug(error)
    }
})

router.get("/me", authMiddleware, (req, res) => {
  return res.status(200).json({
    message: "Admin authenticated",
    admin: req.user,
  });
});

module.exports = router