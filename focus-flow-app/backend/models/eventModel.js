import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
export default Event;
