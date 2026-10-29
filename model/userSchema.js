import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    fullname:{
        type : String,
    },
    email: {
        type : String
    }
})

export default mongoose.model("userdata" , userSchema)