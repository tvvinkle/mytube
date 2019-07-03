import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect( 
  process.env.MONGO_URL,
{
    useNewUrlParser: true,
    useFindAndModify: false
  });

const db = mongoose.connection;

const handleConnection = () => {
  console.log("DB connected Successfully");
};

const handleError = () => {
  console.log(`DB connection failed`);
};

db.once("open", handleConnection);
db.on("error", handleError);
