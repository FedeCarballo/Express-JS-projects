const Product = require('../models/product')

const GetAllProductsStatic = async (req,res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({products})
    } catch (error) {
        console.log(error)
    }
}

const GetAllProducts= async (req,res) => {
    try {
        const { featured, company, name } = req.query
        //Creamos un objeto con todas las querys que vamos a pasarle asi luego lo pasamos todo en una sola req
        const queryObject = {}
        if(featured) {
            //Si el objeto tiene la prop featured devuelve true, de lo contrario devuelve false
            queryObject.featured = featured === 'true' ? true : false
        }
        if(company) {
            queryObject.company = company
        }
        if(name) {
            queryObject.name = {$regex: name, $options: 'i'}
        }
        const products = await Product.find(queryObject)
        if(!queryObject){
            const All = await Product.find({})
            res.status(200).json({All})
        }
        res.status(200).json({products, nHits:products.length})        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    GetAllProductsStatic,
    GetAllProducts
}