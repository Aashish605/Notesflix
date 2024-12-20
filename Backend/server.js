import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import courseroute from "./Route/Course.route.js";
import paperroute from "./Route/Papers.route.js";
import syllabusroute from "./Route/Syllabus.route.js";
import searchroute from "./Route/Search.route.js";
import messageroute from "./Route/Message.route.js";
import notesroute from "./Route/Notespdf.route.js";
import paperpdfroute from "./Route/PaperPdf.route.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const Mongo = process.env.Mongo;

app.get('/', (req, res) => {
    res.send('Hello World i am aashish');
});

mongoose.connect(Mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});

let postData = null;

app.post('/course', bodyParser.text(), (req, res) => {
    postData = req.body;
    res.status(201).send({ message: 'Course created successfully' });
});

app.use('/notes', (req, res, next) => {
    const name = postData || "CSIT";
    req.name = name;
    next();
});

app.use('/notes', courseroute);

app.use("/papers", (req, res, next) => {
    const name = postData;
    req.name = name;
    next();
});

app.use("/papers", paperroute);

app.use("/syllabus", (req, res, next) => {
    const name = postData;
    req.name = name;
    next();
});

app.use("/syllabus", syllabusroute);

app.use("/search", searchroute);

let message = null;

app.post('/contact', (req, res) => {
    message = req.body;
    console.log(req.body);
    console.log(message);
    res.status(201).send({ message: 'Message sent successfully' });
});

app.use("/contact", messageroute);

app.use("/notespdf", (req, res, next) => {
    const name = postData || "Statistics";
    req.name = name;
    console.log(req.name);
    next();
});
app.use("/notespdf", notesroute);

app.use("/paperpdf", (req, res, next) => {
    const name = postData || "First Sem Paper";
    req.name = name;
    console.log(req.name);
    next();
});
app.use("/paperpdf", paperpdfroute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;