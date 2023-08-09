import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./router/route.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api", router);

app.listen(5000, () => {
  console.log("server connected successfully");
});
