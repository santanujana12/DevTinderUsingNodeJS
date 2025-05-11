import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    emailId:String,
    password:String,
    gender:String,
    skills:[String]
})

const User = mongoose.model("User", UserSchema);
export default User;