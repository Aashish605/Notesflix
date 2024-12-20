import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title:String,
    data:Array
})

const Book = mongoose.model("Course",bookSchema)

export default Book ;