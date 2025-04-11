import express from 'express';
import {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
} from '../controllers/eventController.js';

const router = express.Router();

// POST /api/events
router.post('/', createEvent);

// GET /api/events/:userId
router.get('/:userId', getEvents);

// PUT /api/events/:id
router.put('/:id', updateEvent);

// DELETE /api/events/:id
router.delete('/:id', deleteEvent);

export default router;
