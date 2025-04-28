import mongoose from "mongoose";

const syllabuspdfSchema = mongoose.Schema({
    title: String,
    description : String,
    data: Array,
    faculty:String
})

const SyllabusPdf = mongoose.model("syllabuspdf",syllabuspdfSchema)

export default SyllabusPdf;