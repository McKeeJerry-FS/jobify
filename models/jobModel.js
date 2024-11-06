import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    compnay:String,
    position:String,
    jobStatus:{
        type:String,
        enum:[
            'interview', 'declined', 'pending'
        ],
        default: 'pending',
    },
    jobType:{
        type:String,
        enum:[
            'full-time', 'part-time', 'internship', 'contract'
        ],
        default: 'full-time',
    },
    jobLocation: {
        type:String,
        default:'my city',
    }
},{timestamps:true});

export default mongoose.model('Job', JobSchema);