const express = require('express');
const router = express.Router();
const workoutDB = require('../models');

// @ GET
// @ Route   /api/workouts
// @ Decs    Getting all workouts from the DB.
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

// @ POST
// @ Route   /api/workouts
// @ Decs    Create new workout
router.post('/api/workouts', async (req, res) => {
  try {
    const workout = await workoutDB.Workout.create(req.body);

    res.json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @ PUT
// @ Route   /api/workouts/:id
// @ Decs    Updated workout
router.put('/api/workouts/:id', async ({ body, params }, res) => {
  try {
    const workout = await workoutDB.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercised: body } },
      { new: true }
    );

    res.json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @ DELETE
// @ Route   /api/workouts/
// @ decs    Delete workout by id
router.delete('/api/workouts', async ({ body }, res) => {
  try {
    const workout = await workoutDB.Workout.findByIdAndRemove(body.id);

    res.json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
