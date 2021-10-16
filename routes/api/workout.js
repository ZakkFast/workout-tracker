const express = require('express');
const router = express.Router();
const workoutDB = require('../../models/');


// @Route   GET all workouts
// @decs    Getting all workouts from the DB.
router.get('/api/workouts', async (req, res) => {
  try {
    const workout = await workoutDB.Workout.find({});

    if (!workout) {
      return res.status(400).json({ msg: 'There is no workout data' });
    }
    res.send(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @Route   GET all workouts
// @decs    Getting all workouts from the DB.

module.exports = router;
