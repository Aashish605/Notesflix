import PastPdf from "../models/PastPdf.model.js";

export const getpastpdf = async (req, res) => {
    try {
        const pdf = await PastPdf.findOne({ title: `${req.name}` });
        res.status(200).json(pdf);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};