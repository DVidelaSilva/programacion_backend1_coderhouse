const { productModel } = require('../../models/products.model')

class ProductManagerMongo {

    constructor(){

        this.model = productModel
    }

    getProducts = async () => await this.model.find({})

    getProducts = async opts => await this.model.findOne({opts})

    createProducts = async newProduct => await this.model.create(newProduct)
        
   
    updateProducts = async () => {}

    deleteProducts = async () => {}

}

module.exports = {
    ProductManagerMongo
}