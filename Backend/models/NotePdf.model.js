import mongoose from "mongoose";

const notepdfSchema = mongoose.Schema({
    title: String,
    description : String,
    data: Array
})

const NotePdf = mongoose.model("notespdf",notepdfSchema)

export default NotePdf;