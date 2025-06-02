import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    host:{
        type:String,
        required: true,
    },
    details:{
        type:String,
        required:true
    },
    addInfo:{
        dressCode: String,
        ageLimit: Number
    },
    tag:[{
        type:String,
        required:true,
        enum:['marketing','digital','sports','tech','geopolitics','culture','literature']
    }],
    startDate: {
        type:String,
        required:true
    },
    endDate: {
        type:String,
        required:true
    },
    startTime: {
        type:String,
        required:true
    },
    endTime: {
        type:String,
        required:true
    },
    location:String,
    price:{
        type:Number,
        required:true
    },
    isOnline:{
        type:Boolean,
        required:true
    },

    speakers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Speaker'
    }]

})

const Event = mongoose.model('Event',EventSchema)

export default Event;

