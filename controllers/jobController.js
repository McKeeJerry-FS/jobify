import 'express-async-errors';
import Job from '../models/jobModel.js';
import { StatusCodes } from 'http-status-codes';


export const getAllJobs = async (req, res) => {
    console.log(req);
    const jobs = await Job.find({
        createdBy: req.user.userId
    });
    res.status(StatusCodes.OK).json({ jobs });
};

export const getJob = async (req, res) => {
    const job = await Job.findById(req.params.id);
    res.status(StatusCodes.OK).json({ job });
};

export const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const job = await Job.create({ company, position });
    res.status(StatusCodes.CREATED).json({ job });
};

export const editJob = async (req, res) => {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(StatusCodes.OK).json({ job: updatedJob });
};

export const deleteJob = async (req, res) => {
    const removedJob = Job.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({ job: removedJob });
};