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
        const { featured } = req.query
        const queryObject = {}
        if(featured) {
            queryObject.featured = featured === 'true' ? true : false
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