import Notelist from "../models/Notelist.model.js";

export const getNotelist = async (req, res) => {
    try {
        // console.log('Notelist',req.name);
        const data = await Notelist.findOne({ title: `${req.name}` });
        res.status(200).json(data);
    } catch (error) {
        console.log("error:", error);
        res.status(500).json(error);
    }
};