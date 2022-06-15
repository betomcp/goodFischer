import express from "express";
import path from "path";

let app = express();
let __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'src/public')));

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"src/views/index.html"));
})


app.post("/", (req, res) => {
    res.json(req.body);
})


app.listen(process.env.PORT || 3000, () =>
  console.log('Example app listening on port 3000!'),
);