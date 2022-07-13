import mongoose  from "mongoose";

//defining schema //
const  userSchema = new mongoose.Schema({
    image:{type:String,trim:true},
    title:{type:String,trim:true},
    price:{type:String,trim:true},
})

const ImageModal = mongoose.model("imagedata",userSchema);

export default ImageModal;