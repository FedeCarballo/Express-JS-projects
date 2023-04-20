require('dotenv').config()
const jwt = require('jsonwebtoken')
const CustomAPIError = require("../errors/custom-error");

//SI SE TRATA DE UN MIDDLEWARE NUNCA OLVIDARNOS DEL TERCER PARAMETRO NEXT SINO SE QUEDA EN EL MIDDLEWARE
const authenticationMiddleware = async (req,res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No Token has been provided',400)
    }
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user  = {id, username}
        next()
    } catch (error) {
        throw new CustomAPIError('Access denided',401)
    }
}

module.exports = authenticationMiddleware