import dotenv from "dotenv";
import app from "./app";
import "./db";
import "./models/Video";
import "./models/Comment";
import "./models/User";

dotenv.config();

const port = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`Listening: http://localhost:${port}`);

app.listen(port, handleListening);
