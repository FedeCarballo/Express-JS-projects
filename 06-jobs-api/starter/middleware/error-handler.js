
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // Set default error
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg : err.message || 'Something went wrong, please try again later'
  }
  if(err.name === 'ValidationError'){
    customError.msg = Object.values(err.errors).map((item => item.message)).join(',')
    customError.statusCode = 400
  }
  if(err.code && err.code == 11000){
    customError.msg = ` ${Object.keys(err.keyValue)} duplicate, please choose another`
    customError.statusCode = 400
  }
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
