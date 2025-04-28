import mongoose from "mongoose";

const getsyllabuslistSchema = mongoose.Schema({
    title : String,
    data : Array
})

const Syllabuslist = mongoose.model("Syllabuslist",getsyllabuslistSchema)

export  default Syllabuslist