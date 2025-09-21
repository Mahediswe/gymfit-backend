import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: Number }, // in hours
  price: { type: Number },
}, {
  timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
