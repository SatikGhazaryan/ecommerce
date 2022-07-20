import express from 'express';
const userRouter = express.Router();
import userControllers from '../controllers/user-controller.js';

userRouter.get('/user', userControllers.getUserController);
userRouter.post('/user',  userControllers.postUserController);
userRouter.delete('/user', userControllers.deleteUserController);
userRouter.put('/user', userControllers.putUserController);

export default userRouter;
