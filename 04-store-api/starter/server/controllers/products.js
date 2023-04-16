const Product = require('../models/product')

const GetAllProducts= async (req,res) => {
    try {
        const { featured, company, name, sort, fields,numericFilters } = req.query
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
        let result = Product.find(queryObject)
        if(sort){
            const sortList = sort.split(',').join(' ')
            result = result.sort(sortList)
        }else{
            // como valor default le pasamos que ordene los resultados por fecha de creacion 
            result =result.sort('createdAt')
        }
        if(fields){
        //Con esto traemos solamente los datos que pedimos, ej: solo name, solo price, price y name, etc.
            const fieldList = fields.split(',').join(' ')
            result = result.select(fieldList)
        }
        if(numericFilters){
            const operatorMap = {
                '>': '$gt',
                '>=' : '$gte',
                '=' : '$eq',
                '<' : '$lt',
                '<=' : '$lte',
            }
            const regEx = /\b(<|>|>=|<=|=)\b/g
            let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)
            console.log(filters);
            //Aca abajo estos filtros que pasamos lo trasnformamos a un objeto, pasa de esta forma:
            //price-$gt-40,rating-$gte-4
            // A esta forma: { price: { '$gt': 40 }, rating: { '$gte': 4 } }
            //Esto sucede ya que usamos el operatorMap arriba y matcheamos los valores que ponemos con los valores que acepta Mongoose para darnos filtrados 
            const options = ['price','rating']
            filters = filters.split(',').forEach(e => {
                const [field,operator,value] = e.split('-')
                if(options.includes(field)){
                    queryObject[field] = {[operator]: Number(value)}
                }
            });
        }
        console.log(queryObject);
        //Paginacion
        const page = Number(req.query.page) || 1
        //Limitacion de resultados
        const limit = Number(req.query.limit) || 10
        //Con este skip lo que hacemos es ir saltando los resultados, primero mostramos los primeros 10,luego hacemos skip de esos 10 y arrancamos del 11 en adelante y asi sucesivamente hasta el final
        const skip = (page-1)* limit
        result = result.skip(skip).limit(limit)

        const products = await result
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
    GetAllProducts
}