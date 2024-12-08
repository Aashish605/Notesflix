import mongoose from "mongoose";

const notespdfSchema = mongoose.Schema({
    title: String,
    description : String,
    data: Array
})

const NotesPdf = mongoose.model("notespdf",notespdfSchema)

export default NotesPdf;