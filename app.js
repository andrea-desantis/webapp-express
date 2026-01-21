import express from "express";
import postsRouter from "./routers/posts.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ciao");
});


// router
app.use("/posts", postsRouter);

// middleware
app.use(errorHandler);



app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});