import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect( 
  "mongodb://127.0.0.1:27017/mytube",
{
    useNewUrlParser: true,
    useFindAndModify: false
  });

const db = mongoose.connection;

const handleConnection = () => {
  console.log("DB connected Successfully");
};

db.once('open', handleConnection);
db.on('error', console.error.bind(console, 'connection error:'));
