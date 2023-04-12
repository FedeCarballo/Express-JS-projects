const GetAllProductsStatic = async (req,res) => {
    try {
        res.status(200).json({msg: 'products testing route'})
    } catch (error) {
        throw new Error('testing async errors')
    }
}

const GetAllProducts= async (req,res) => {
    res.status(200).json({msg: 'products route'})
}

module.exports = {
    GetAllProductsStatic,
    GetAllProducts
}