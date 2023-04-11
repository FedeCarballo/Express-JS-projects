const GetAllProductsStatic = async (req,res) => {
    res.status(200).json({msg: 'products testing route'})
}

const GetAllProducts= async (req,res) => {
    res.status(200).json({msg: 'products route'})
}

module.exports = {
    GetAllProductsStatic,
    GetAllProducts
}