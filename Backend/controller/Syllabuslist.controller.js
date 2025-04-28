import  Syllabuslist  from "../models/Syllabuslist.model.js";

export const getSyllabuslist = async (req,res) => {
    try {
        console.log("syllabuslist",req.name);
        const data = await Syllabuslist.findOne({title:`${req.name}`})
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}