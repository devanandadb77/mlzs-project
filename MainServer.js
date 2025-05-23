import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./Router/RouteData.js";



const app = express();
app.use(bodyParser.json());
app.use(cors())
dotenv.config();
app.use("/images", express.static("images"));
app.use("/videos", express.static("videos"));
app.use("/pdfs", express.static("pdfs"));

const PORT =process.env.PORT || 7000;
const URL = process.env.MONGOURL;


mongoose.connect(URL).then (() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`);
    })
}).catch(error => console.log(error));

app.use("/api", route)

