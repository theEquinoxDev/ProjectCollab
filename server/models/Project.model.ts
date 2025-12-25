import mongoose from "mongoose";

const schema = mongoose.Schema;

const projectSchema = new schema({
    title: {
        type: String, 
        required: true
    }, 
    description: {
        type: String, 
        required: true
    }, 
    type: {
        type: String, 
        enum: ['hackathon', 'college', 'side'], 
        required: true, 
        index: true
    }, 
    skillsRequired: {
        type: [String], 
        required: true
    }, 
    teamSize: {
        type: Number, 
        required: true
    }, 
    ownerId: {
        type: schema.Types.ObjectId,
        ref: "User",
        required: true
    },
},{timestamps: true});

const Project = mongoose.model("Project", projectSchema);

export default Project;