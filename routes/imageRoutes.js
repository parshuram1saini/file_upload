import express from "express";
const router = express.Router(); // router() function inside the express 
import upload from "../middleware/upload.js"
import  { addProduct, getAllProducts,getSingleProduct,deleteProduct,updateProduct} from "../controller/imageController.js"

////product post router--//
router.post("/addproduct",upload,addProduct)

router.post("/getproducts",getAllProducts)

// Products router
router.get('/:id', getSingleProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

export default router;