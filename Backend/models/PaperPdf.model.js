import mongoose from "mongoose";

const paperpdfSchema = mongoose.Schema({
    title: String,
    description : String,
    data: Array
})

const PaperPdf = mongoose.model("paperpdf",paperpdfSchema)

export default PaperPdf;