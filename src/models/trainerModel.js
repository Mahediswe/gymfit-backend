// import mongoose from 'mongoose';

// const trainerSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String, // image path or url
//     required: true,
//   },
// }, {
//   timestamps: true,
// });

// const Trainer = mongoose.model('Trainer', trainerSchema);

// export default Trainer;


import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  bio: { type: String },
  experience: { type: String },
  image: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Trainer", trainerSchema);
