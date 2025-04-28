import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import Notelist from "./Route/Notelist.route.js";
import NotePdf from "./Route/NotePdf.route.js";
import Pastlist from "./Route/Pastlist.route.js";
import PastPdf from "./Route/PastPdf.route.js";
import Syllabuslist from "./Route/Syllabuslist.route.js";
import SyllabusPdf from "./Route/SyllabusPdf.route.js";
import searchroute from "./Route/Search.route.js";

const app = express();
app.use(cors());
app.use(bodyParser.text());

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

app.post('/course', (req, res) => {
    postData = req.body;
    res.status(201).send({ message: 'Course created successfully' });
});

app.post('/syllabus', bodyParser.json(),(req, res) => {
    postData = req.body;
    res.status(201).send({ message: 'Course created successfully' });sdf
});

app.use('/Notelist', (req, res, next) => {
    req.name = postData || "CSIT";
    next();
});

app.use('/Notelist', Notelist);

app.use("/Pastlist", (req, res, next) => {
    req.name = postData;
    next();
});

app.use("/Pastlist", Pastlist);

app.use("/Syllabuslist", (req, res, next) => {
    req.name = postData;
    next();
});

app.use("/Syllabuslist", Syllabuslist);

app.use("/search", searchroute);


app.use("/Notepdf", (req, res, next) => {
    req.name = postData || "Statistics";
    next();
});
app.use("/Notepdf", NotePdf);

app.use("/Pastpdf", (req, res, next) => {
    req.name = postData || "First Sem Paper";
    next();
});
app.use("/Pastpdf", PastPdf);

app.use("/Syllabuspdf", (req, res, next) => {

    req.faculty = postData.course;
    req.title = postData.subj;
    next();
});
app.use("/Syllabuspdf", SyllabusPdf);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;