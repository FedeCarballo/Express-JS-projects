const morgan = require('morgan');
const express = require('express')
require('dotenv').config()
require('express-async-errors')
const port = process.env.PORT || 3000;
const connectDB = require('./db/connect')


const productsRouter = require('./routes/products')
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: "*" }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  next();
});
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