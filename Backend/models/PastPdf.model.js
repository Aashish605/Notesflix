import mongoose from "mongoose";

const pastpdfSchema = mongoose.Schema({
    title: String,
    description : String,
    data: Array
})

const PastPdf = mongoose.model("pastpdf",pastpdfSchema)

export default PastPdf;