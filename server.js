// Imports
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

import { validateTest } from './middleware/validationMiddleware.js';

//routers
import jobRouter from './routes/jobRouter.js';


if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());

app.use('/api/v1/jobs', jobRouter);
app.use(errorHandlerMiddleware);


app.use('*', (req, res) => {
    res.status(404).json({msg: 'Not Found'});
});

app.use('*', (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ msg:'something went wrong...'});
});

app.post('/api/v1/test',validateTest, (req, res) => {
      const { name } = req.body;
      res.json({ msg: `hello ${name}` });
});

const port = process.env.PORT || 5100;
try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server is running on PORT: ${port}...`);
    });
} catch(error) {
    console.log(error);
    process.exit(1);
}


