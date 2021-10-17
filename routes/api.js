const express = require('express');
const router = express.Router();
const db = require('../models');

// @ GET
// @ Route   /api/workouts
// @ Decs    Getting all workouts from the DB.
router.get('/api/workouts', async (req, res) => {
  try {
    const workout = await db.Workout.find({});

    if (!workout) {
      return res.status(400).json({ msg: 'There is no workout data' });
    }

    res.json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @ POST
// @ Route   /api/workouts
// @ Decs    Create new workout
router.post('/api/workouts', async (req, res) => {
  try {
    const workout = await db.Workout.create(req.body);

    res.json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @ PUT
// @ Route   /api/workouts/:id
// @ Decs    Updated workout
router.put('/api/workouts/:id', async (req, res) => {
  try {
    const workout = await db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    );

    res.json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @ GET
// @ Route   /api/workouts/range
// @ decs    Get workout by range
router.get('/api/workouts/range', async (req, res) => {
  try {
    const workout = await db.Workout.find({}).limit(10);

    res.json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
