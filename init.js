import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const port = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`Listening: http://localhost:${port}`);

app.listen(port, handleListening);
