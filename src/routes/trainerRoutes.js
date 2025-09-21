// import express from 'express';
// import Trainer from '../models/trainerModel.js';

// const router = express.Router();

// // Get all trainers
// router.get('/', async (req, res) => {
//   try {
//     const trainers = await Trainer.find();
//     res.json(trainers);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get single trainer by id
// router.get('/:id', async (req, res) => {
//   try {
//     const trainer = await Trainer.findById(req.params.id);
//     if (!trainer) return res.status(404).json({ message: 'Trainer not found' });
//     res.json(trainer);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;

import express from "express";
import Trainer from "../models/trainerModel.js";

const router = express.Router();

// সব Trainer
router.get("/", async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// একক Trainer Details
router.get("/:id", async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);
    if (!trainer) return res.status(404).json({ message: "Trainer not found" });
    res.json(trainer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;


