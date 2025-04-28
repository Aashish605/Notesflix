import mongoose from "mongoose";

const pastlistSchema = mongoose.Schema({
    title:String,
    data:Array
})

const Pastlist = mongoose.model("pastlist",pastlistSchema)

export default Pastlist