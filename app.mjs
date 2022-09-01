import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use("/", express.static(__dirname + "/public/images"));
app.use("/", express.static(__dirname + "/public/styles"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html");
});

app.get("/photos", (req, res) => {
    res.sendFile(__dirname + "/views/photos.html");
});

app.listen(3000);