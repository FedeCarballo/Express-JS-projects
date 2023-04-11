require('dotenv').config()
//Async errors

const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

// Middlewares
const NotFoundMiddleware = require('./middleware/not-found')
const ErrorMiddleware = require('./middleware/error-handler')
app.use(express.json())

//Routes

app.get('/',(req,res) =>{
    res.send('<h1>Store API <a href="/api/v1/products">Products Route</a></h1>')
})

app.use('/api/v1/products', productsRouter)
//Products Route

app.use(NotFoundMiddleware)
app.use(ErrorMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`server listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()