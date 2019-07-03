import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "Video URL is required"
    },
    title:{
        type: String,
        required: "Title is required"
    },
    description:{
        type: String,
    },
    views:{
        type: number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

const model = mongoose.model("Video", VideoSchema);
export default model;

