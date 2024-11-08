// Imports
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';


// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';



// routers
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import cookieParser from 'cookie-parser';
import { authenticateUser } from './middleware/authMiddleware.js';

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/auth', authRouter);


app.use('*', (req, res) => {
    res.status(404).json({msg: 'Not Found'});
});

app.use(errorHandlerMiddleware);

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


