const express = require("express")

const router = express.Router()

const authentication =require("../middleware/auth");
const {authorization} = require("../middleware/authorization");
const validate = require("../middleware/validate");
const { validateProduct } = require("../validators/product.validator");

const{getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/products")


router.get("/", authentication, getProducts);
router.get("/:id", authentication, getProduct);


router.post("/", authentication, authorization, validate(validateProduct),createProduct);


router.put("/:id", authentication, authorization, validate(validateProduct),updateProduct);

router.delete("/:id", authentication, authorization, deleteProduct)


module.exports = router;