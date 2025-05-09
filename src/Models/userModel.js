import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    },
    gender:{
        type:String,
    }
})

const User = mongoose.model("User", UserSchema);
export default User;