import express from 'express';
const adminRouter = express.Router();
import adminControllers from '../controllers/admin-controller.js';

adminRouter.get('/admin', adminControllers.getAdminController);
adminRouter.post('/admin',  adminControllers.postAdminController);
adminRouter.delete('/admin', adminControllers.deleteAdminController);
adminRouter.put('/admin', adminControllers.putAdminController);

export default adminRouter;
