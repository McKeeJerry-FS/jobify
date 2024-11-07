import mongoose from 'mongoose';
import { JOB_STATUS, JOB_TYPE, JOB_SORT_BY } from '../utils/constants.js';

const JobSchema = new mongoose.Schema({
    compnay:String,
    position:String,
    jobStatus:{
        type:String,
        enum:Object.values(JOB_STATUS),
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