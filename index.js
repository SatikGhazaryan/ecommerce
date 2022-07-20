import express from 'express';
import mongoose from 'mongoose';
import indexRouter from './routers';
const app = express();
const port = 5000;
const json = express.json(); 
app.use(json);

(async () => {
    await mongoose.connect('mongodb://localhost:27017/project');
})();

const staticFiles = express.static('./front');
app.use('/front', staticFiles);


app.listen(port, ()=> console.log(`Server is listening port ${port}`));

app.use(contactRouter);
