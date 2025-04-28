import  Pastlist  from "../models/Pastlist.model.js";

export const getPastlist = async (req,res) => {
    try {
        console.log("pastlist",req.name)
        const data = await Pastlist.findOne({title:`${req.name}`})
        res.status(200).json(data)
    } catch (error) {
        console.log(error);   
    }
}