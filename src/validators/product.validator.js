const validateProduct = (data) => {
const {name, description, price} = data;

if(!name || !description || price){
throw new Error("name, description and price is required")

}

if(typeof name !== "string" || !name.trim()){

throw new Error("product name is required")

}

if(name.length < 2 ){
throw new Error("product name must be at least more tha 2 characters")

}

if(typeof description !== "string" || !description.trim()){
throw new Error("product description is required")

}

if(description.length < 6){
throw new Error("product description must be at least 6 characters")

}

if(typeof price !== "Number"){
throw new Error("price must be a number")

}

if(!Number.isFinite(price)){
throw new Error("price must be a whole number")

}

if(price < 0){
throw new Error("price must be greater than zero")


}

}

module.exports = {validateProduct}