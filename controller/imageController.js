//---image upload controller----//
import ImageModal from "../model/imageModel.js";

// 1.create product
const addProduct= async (req, res) => {
    console.log(req,req.files)
    try {
      const userProduct = new ImageModal({
        title: req.body.title,
        price: req.body.price,
      })
      if(req.file){
          userProduct.image = req.file.path;
          console.log(userProduct.image)
      }
       await userProduct.save()
           return res
             .status(200)
             .json({ status: "success", message: "product is added" });
    } catch (error) {
      return res
      .status(400)
      .json({ status: "success", message: error });
    }
}

// 2. get all products
const getAllProducts = async (req, res) => {
  let products = await ImageModal.find({});
  return res.status(200).send(products);
};

//3. get single product
const getSingleProduct = async (req, res) => {
  let id = req.params.id;
  let products = await ImageModal.imageData.findone({ where: { id: id } });
  if (!products) {
    return res.status(400).send(products);
  } else {
    return res.status(200).send(products);
  }
};

//4. update the product
const updateProduct = async (req, res) => {
  let id = req.params.id;
  const findIdprod = await ImageModal.findone({ where: { id: id } });
  if (!findIdprod) {
    return res.status(400).send({ status: 0, message: "Id isn't found" });
  } else {
    let products = await ImageModal.findAll(req.body, {
      where: { id: id },
    });
    if (!products) {
      return res.status(400).send(products);
    } else {
      return res.status(200).send(products);
    }
  }
};
//5. delete the product
const deleteProduct = async (req, res) => {
  const deleteprod = await ImageModal.findone({ where: { id: id } });
  if (!deleteprod) {
    return res
      .status(400)
      .send({ status: 0, message: "Delete the correct Id" });
  } else {
    await ImageModal.destroy(deleteprod);
    return res
      .status(200)
      .send({ satus: 0, message: "product deleted successfully" });
  }
};


export {addProduct,getAllProducts,getSingleProduct,deleteProduct,updateProduct}