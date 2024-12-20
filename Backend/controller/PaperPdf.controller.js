import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import courseroute from "./Route/Course.route.js";
import paperroute from "./Route/Papers.route.js";
import cors from "cors";
import bodyParser from "body-parser";
import syllabusroute from "./Route/Syllabus.route.js";
import searchroute from "./Route/Search.route.js";
import messageroute from "./Route/Message.route.js";
import notesroute from "./Route/Notespdf.route.js";
import paperpdfroute from "./Route/PaperPdf.route.js";
import PaperPdf from "../models/PaperPdf.model.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const Mongo = process.env.Mongo;

app.get('/', function (req, res) {
    res.send('Hello World');
});

try {
    mongoose.connect(Mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to Mongo");
} catch (error) {
    console.log(error);
}

let postData = null;

app.post('/course', bodyParser.text(), (req, res, next) => {
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

app.post('/contact', (req, res, next) => {
    app.use(bodyParser.json());
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

app.listen(PORT);

export const getPaperPdf = async (req, res) => {
    try {
        const pdf = await PaperPdf.findOne({ title: `${req.name}` });
        res.status(200).json(pdf);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};