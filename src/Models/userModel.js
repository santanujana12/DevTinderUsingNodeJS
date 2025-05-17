import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:[4,"FirstName must be at least 6 characters long."],
        maxlength:12
    },
    lastName:{
        type:String,
        required:true,
        minLength:[4,"FirstName must be at least 6 characters long, got {VALUE}"],
        maxlength:12
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email");
            }
        },
        trim:true
    },
    password:String,
    gender:String,
    age:{
        type:Number,
        min:18
    },
    skills:[String]
})

const User = mongoose.model("User", UserSchema);
export default User;