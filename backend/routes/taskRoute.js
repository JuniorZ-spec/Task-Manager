import express from 'express';
import { getTasks, createTask, getTaskById, updateTask, deleteTask } from '../contollers/taskController.js';
import authMiddleware from '../middleware/auth.js';



const taskRouter = express.Router();


taskRouter.route('/gp')
    .get(authMiddleware, getTasks)
    .post(authMiddleware, createTask);


taskRouter.route('/:id/gp')
    .get(authMiddleware, getTaskById)
    .put(authMiddleware, updateTask)
    .delete(authMiddleware, deleteTask)


export default taskRouter;



