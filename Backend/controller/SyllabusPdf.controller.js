import SyllabusPdf from '../models/SyllabusPdf.model.js'

export const getsyllabuspdf = async (req, res) => {
    try {
        const pdf = await SyllabusPdf.findOne({ title: `${req.title}`,faculty:`${req.faculty}` });
        res.status(200).json(pdf);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};