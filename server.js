// Imports
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';

//routers
import jobRouter from './routes/jobRouter.js';


if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());

app.use('/api/v1/jobs', jobRouter);



app.use('*', (req, res) => {
    res.status(404).json({msg: 'Not Found'});
});

app.use('*', (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ msg:'something went wrong...'});
});

// app.post('/', (req, res) => {
//     console.log(req);
//     res.json({ message: 'Data Recieved', data: req.body});
// });

const port = process.env.PORT || 5100;
app.listen(port, () => {
    console.log(`server is running on PORT: ${port}...`);
});

