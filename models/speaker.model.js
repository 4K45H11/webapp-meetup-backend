import mongoose from "mongoose";

const SpeakerSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    specialization:{
        type:String,
        required: true
    },
    profilePictureUrl:{
        type:String
    }

})

const Speaker = mongoose.model('Speaker',SpeakerSchema)

export default Speaker;