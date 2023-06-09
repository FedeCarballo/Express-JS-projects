require('dotenv').config()
const jwt = require('jsonwebtoken')
const CustomAPIError = require("../errors/custom-error");

const login = async (req,res) => {
    const {username, password} = req.body
// chequeamos que ambos valores fueron pasados por body para hacer la validacion correcta 
    if(!username || !password){
       throw new CustomAPIError('Please Provide an email and password',400)
    }
    const id = new Date().getDate()

    const token = jwt.sign({id, username},process.env.JWT_SECRET, {expiresIn:'30d'})
    res.status(200).json({msg:'user created', token})
}

const dashboard = async (req,res) => {

    const luckyNumber = Math.floor(Math.random()*100)
    res
        .status(200)
        .json(
            {msg: `Hello ${req.user.username}`,
            secret: `lucky number is: ${luckyNumber}`
        })
}


module.exports = {
    login,
    dashboard
}