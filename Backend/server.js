import express from "express";
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";
import Grid from "gridfs-stream"
import courseroute from "./Route/Course.route.js"
import paperroute from "./Route/Papers.route.js"
import cors from "cors"
import bodyParser from "body-parser";
import axios from "axios";
import syllabusroute from "./Route/Syllabus.route.js"
import searchroute from "./Route/Search.route.js"
import messageroute from "./Route/Message.route.js"
import notesroute from "./Route/Notespdf.route.js"
import paperpdfroute from "./Route/PaperPdf.route.js"

const app = express()
app.use(bodyParser.json());
app.use(cors())


const PORT = process.env.PORT || 3000
const Mongo = process.env.Mongo

app.get('/', function (req, res) {
    res.send('Hello World')
})

mongoose.connect(Mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
console.log("connected to Mongo");


let postData = null

app.post('/course', bodyParser.text(), (req, res, next) => {
    postData = req.body
    res.status(201).send({ message: 'Course created successfully' });
});

app.use('/notes', (req, res, next) => {
    const name = postData
    req.name = name;
    next();
});

app.use('/notes', courseroute);


app.use("/papers", (req, res, next) => {
    const name = postData
    req.name = name;
    next()
}
)

app.use("/papers", paperroute)

app.use("/syllabus", (req, res, next) => {
    const name = postData
    req.name = name;
    next()
}
)

app.use("/syllabus", syllabusroute)

app.use("/search", searchroute)


let message = null





app.use("/notespdf", (req, res, next) => {
    const name = postData || "Statistics"
    req.name = name;
    console.log(req.name);
    next()
})
app.use("/notespdf", notesroute)

app.use("/paperpdf", (req, res, next) => {
    const name = postData || "First Sem Paper"
    req.name = name;
    console.log(req.name);
    next()
})
app.use("/paperpdf", paperpdfroute)

app.listen(PORT)    
