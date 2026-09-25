const JWT = require('jsonwebtoken')

const authmiddleware = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized. Please login first",
            });
        }

        const decoded = JWT.verify(
            token,
            process.env.JWT_KEY
        )
        req.admin = decoded

        next()
    } catch (error) {
        console.log("Auth Error:", error.message);

        return res.status(401).json({
            message: "Invalid or expired token",
        });

    }
}
module.exports = authmiddleware;