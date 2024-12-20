import Message from "../models/Message.model.js";

export const createMessage = async (req, res) => {
    try {
        const user = new Message({ name: 'John Doe', email: 'john.doe@example.com', message: "hi" });
        await user.save();
        res.status(201).json({ message: 'Message created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
