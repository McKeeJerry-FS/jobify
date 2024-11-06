// Imports
import express from 'express';
const app = express();
import morgan from 'morgan';
import { nanoid } from 'nanoid';
import * as dotenv from 'dotenv';
dotenv.config();

let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end' },
    { id: nanoid(), company: 'google', position: 'back-end' },
  ];


if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello World');
});

// GET ALL JOBS
app.get('/api/v1/jobs', (req, res) => {
    res.status(200).json({ jobs });
});

// app.post('/', (req, res) => {
//     console.log(req);
//     res.json({ message: 'Data Recieved', data: req.body});
// });

// CREATE JOB
app.post('/api/v1/jobs', (req, res) => {
    const { company, position } = req.body;
    if (!company || !position ) {
        return res.status(400).json({ msg: 'please provide company and position' });
    }
    const id = nanoid(10);
    console.log(id);
    const job = { id, company, position };
    jobs.push(job);
    res.status(200).json({ job });
});





const port = process.env.PORT || 5100;
app.listen(port, () => {
    console.log(`server is running on PORT: ${port}...`);
});

