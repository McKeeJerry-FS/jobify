// Imports
import express from 'express';
const app = express();
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req);
    res.json({ message: 'Data Recieved', data: req.body});
})


app.get('/', (req, res) => {
    res.send('Hello World');
});
const port = process.env.PORT || 5100;
app.listen(port, () => {
    console.log(`server is running...on PORT: ${port}...`);
});

