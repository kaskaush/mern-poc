import express from "express";
import path from "path";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose, { mongo } from "mongoose";
import bb from "express-busboy";
import todoRoutes from "./routes/todo.server.route";
import SourceMapSupport from "source-map-support";

require("dotenv").config();
const app = express();

bb.extend(app);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static("../frontend/mern-frontend/build"));
console.log("dirnmae", __dirname);

const port = process.env.PORT;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true
});

SourceMapSupport.install();

app.use("/api", todoRoutes);
app.get("/", (req, res) => {
  return res.send("API working");
});

app.use((req, res, next) => {
  res.status(404).send("<h2>Page not found!</h2>");
});

app.listen(port, () => {
  console.log("App server listening at ", port);
});
