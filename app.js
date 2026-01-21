import express from "express";

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ciao");
});


app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});