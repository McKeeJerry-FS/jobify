import 'express-async-errors';
import Job from '../models/jobModel.js';
import { StatusCodes } from 'http-status-codes';

export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({});
    res.status(StatusCodes.OK).json({ jobs });
};

export const getJob = async (req, res) => {
const { id } = req.params;
const job = await Job.findById(id);
if (!job) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `no job with id ${id}` });
}
res.status(StatusCodes.OK).json({ job });
};

export const createJob = async (req, res) => {
    const { company, position } = req.body;
    const job = await Job.create({ company, position });
    res.status(StatusCodes.CREATED).json({ job });
};

export const editJob = async (req, res) => {
    const { id } = req.params;

    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
      new: true,
    });
  
    if (!updatedJob) {
      return res.status(StatusCodes.NOT_FOUND).json({ msg: `no job with id ${id}` });
    }
  
    res.status(StatusCodes.OK).json({ job: updatedJob });
  };

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    const removedJob = Job.findByIdAndDelete(id);
    if(!removedJob) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: `No job with id ${id}` });
    }
    res.status(StatusCodes.OK).json({ job: removedJob });
};