import mongoose from "mongoose";

const NotelistSchema = mongoose.Schema({
    title:String,
    data:Array
})

const Note = mongoose.model("Notelist",NotelistSchema)

export default Note ;