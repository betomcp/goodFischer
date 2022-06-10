import express from "express";
import path from "path";

let app = express();
let __dirname = path.resolve();

app.use(express.json());

app.get("/", (req, res) => {
    console.log(req.hostname)
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.post("/", (req, res) => {
    res.json(req.body);
})


app.listen(process.env.PORT || 3000, () =>
  console.log('Example app listening on port 3000!'),
);