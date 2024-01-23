import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const contractSchema = new Schema({ 
    title: String,
    description: String,
    category: String,
    priority: String,
    progress: String,
    status: String,
    active: Boolean
},
{
    timestamps: true,
}


);

const Contract = mongoose.models.Contract || mongoose.model("Contract", contractSchema);

export default Contract;