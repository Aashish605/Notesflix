import PaperPdf from "../models/PaperPdf.model.js"

export const getpdf = async (req,res) => {
    try {
        const pdf = await notespdf.findOne({title:`${req.name}`})
        res.status(200).json(pdf)
    } catch (error) {
        console.log(error)
    }
}