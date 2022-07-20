import express from 'express';
import mongoose from 'mongoose';
import adminRouter from './routers/admin-router.js';
import userRouter from './routers/user-router.js';

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

app.use(adminRouter);
app.use(userRouter);

