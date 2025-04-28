import Notepdf from "../models/NotePdf.model.js"

export const getNotepdf = async (req,res) => {
    try {
        const pdf = await Notepdf.findOne({title:`${req.name}`})
        res.status(200).json(pdf)
    } catch (error) {
        console.log(error)
    }
}