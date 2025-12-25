import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    }, 
    college: {
        type: String, 
        required: true, 
    }, 
    year: {
        type: Number, 
        required: true, 
    }, 
    skills: {
        type: [String], 
        default: [], 
        required: true
    }, 
    githubLink: {
        type: String, 
    }, 
    whatsappNumber: {
        type: String, 
        required: true
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;