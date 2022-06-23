import express from "express";
import path from "path";

let app = express();
let __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'src/public')));

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"src/views/index.html"));
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname,"src/views/about-us.html"));
})

app.get("/about-2", (req, res) => {
    res.sendFile(path.join(__dirname,"src/views/about-us-2.html"));
})

app.get("/projects", (req, res) => {
    res.sendFile(path.join(__dirname,"src/views/projects-menu.html"));
})

app.get("/web-motors", (req, res) => {
    res.sendFile(path.join(__dirname,"src/views/projects-html/web-motors.html"));
})




app.listen(process.env.PORT || 3000, () =>
console.log('Example app listening on port 3000!'),
);


// app.post("/", (req, res) => {
//     res.json(req.body);
// })