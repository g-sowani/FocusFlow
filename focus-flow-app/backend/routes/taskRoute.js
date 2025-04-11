import express from 'express';
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

const router = express.Router();

// POST /api/tasks
router.post('/', createTask);

// GET /api/tasks/:userId
router.get('/:userId', getTasks);

// PUT /api/tasks/:id
router.put('/:id', updateTask);

// DELETE /api/tasks/:id
router.delete('/:id', deleteTask);

export default router;
