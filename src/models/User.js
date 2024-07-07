import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please give name']
    },
    email: {
        type :String ,  
        unique:[ true,'Email already exist'],
        required:[true,"please enter your Email"]
    },
    password: {
        type:String,
        required:[true,"Please enter your password"]
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.User || mongoose.model("User",UserSchema);

export default User;