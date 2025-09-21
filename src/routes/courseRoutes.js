// import express from "express";
// import Course from "../models/courseModel.js";

// const router = express.Router();

// // get all course
// router.get("/", async (req, res) => {
//   const courses = await Course.find();
//   res.json(courses);
// });

// // create new course (admin )
// router.post("/", async (req, res) => {
//   const newCourse = new Course(req.body);
//   await newCourse.save();
//   res.status(201).json(newCourse);
// });

// export default router;


import express from "express";
import Course from '../models/courseModel.js';

const router = express.Router();

// router.get("/", async (req, res) => {
//   const courses = await Course.find(); 
//   res.json(courses);
// });



// all course
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// course by id
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;

