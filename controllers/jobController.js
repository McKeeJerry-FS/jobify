import 'express-async-errors';
import Job from '../models/jobModel.js';
import { nanoid } from 'nanoid';

let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end' },
    { id: nanoid(), company: 'google', position: 'back-end' },
  ];

export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({});
    res.status(200).json({ jobs });
};

export const getJob = async (req, res) => {
const { id } = req.params;
const job = await Job.findById(id);
if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
}
res.status(200).json({ job });
};

export const createJob = async (req, res) => {
    const { company, position } = req.body;
    const job = await Job.create({ company, position });
    res.status(201).json({ job });
};

export const editJob = async (req, res) => {
    const { id } = req.params;
    const updatedJob = Job.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    if(!updatedJob) {
        return res.status(404).json({ msg: `No job with id ${id}` });
    }
    
    res.status(200).json({ msg: 'job modified', job });
};

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    const removedJob = jobs.findByIdAndDelete(id);
    if(!removedJob) {
        return res.status(404).json({ msg: `No job with id ${id}` });
    }
    res.status(200).json({ job: removedJob });
};