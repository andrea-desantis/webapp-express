import express from "express";
import postsRouter from "./routers/posts.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";

const app = express();
const port = process.env.SERVER_PORT;

app.use(
    cors({
        origin: "http://localhost:5173",
    }),
);

app.use(express.json());

app.use('/img', express.static('public/img'));



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