const products = require("../database/products")


const getProducts = (req, res, nexts) => {
try{
    return res.status(200).json({
status: "success",
products,

    })

}
catch(error){

    nexts(error)
}


}

const getProduct = (req, res,next) => {
    try{
const id = Number(req.params.id)

const product = products.find((product)=> product.id === id)
if(!product){
return res.status(404).json({
status: "error",
message: "product not found"

})

}

return res.status(200).json({
status: "success",
product,

})
    }
    catch(error){
        next(error)
    }
}

const createProduct = (req, res, next) => {
try{
const {name,description, price} = req.body;

if(!name || !description || !price){
 return res.status(400).json({
status: "error",
message: " name, description and price are required"

 })


}

const newProduct = {
id: products.length + 1,
name: name.trim(),
description: description.trim(),
price:Number(price)

}

products.push(newProduct)

return res.status(201).json({
status: "success",
message: "product created successfully",
products: newProduct



})
}
catch (error){

    next(error)
}


}


const updateProduct = (req, res, next)=> {
try{
    const id = Number(req.params.id)


    const product = products.find((product) => product.id === id)
   if(!product){
    return res.status(404).json({
        status:"error",
        messag: "product not found"

    })


   } 

   const {name, description, price} = req.body;

   if(name !== undefined){
    product.name = name.trim()

   }

if(description !== undefined){
    product.description = description.trim()

   }

   if(price !== undefined){
    product.price = Number(price)

   }

   return res.status(200).json({
    status:"success",
    message: "product updated successfully"
   })

}
catch(error){

    next(error)
}

}


const deleteProduct = (req, res, next) => {
try{
    const id = Number(req.params.id)

    const productIndex = products.findIndex((product)=> product.id === id);

    if(productIndex === -1){
return  res.status(403).json({
status:"error",
message:"product not found"

})

    }

const deletedProduct = products.splice(productIndex, 1)
return res.status(200).json({
status: "success",
message: "product deleted successfully",
product: deletedProduct[0]

})


}
catch(error){

    next(error)
}

}

module.exports = {getProducts, getProduct, createProduct, updateProduct, deleteProduct}