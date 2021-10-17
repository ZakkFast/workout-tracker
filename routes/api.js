const express = require('express');
const router = express.Router();
const db = require('../models');
const mongoose = require('mongoose')

// @ GET
// @ Route   /api/workouts
// @ Decs    Getting all workouts from the DB.
// router.get('/api/workouts', async (req, res) => {
//   try {
//     const workout = await workoutDB.Workout.find({});

//     if (!workout) {
//       return res.status(400).json({ msg: 'There is no workout data' });
//     }
//     console.log(workoutDB.Workout.find())
//     res.send(workout);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// @ GET
// @ Route   /api/workouts
// @ Decs    Getting all workouts from the DB.
router.get('/api/workouts', (req, res) => {
  db.Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// @ POST
// @ Route   /api/workouts
// @ Decs    Create new workout
// router.post('/api/workouts', async ({ body }, res) => {
//   try {
//     const workout = await workoutDB.Workout.create(body);

//     res.json(workout);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// @ POST
// @ Route   /api/workouts
// @ Decs    Create new workout
router.post('/api/workouts', (req, res) => {
  db.Workout.create(req.body)
    .then((data) => {
      res.json(data);
      console.log(req.body)
    })
    .catch((err) => {
      res.send(err);
    });
});

// @ PUT
// @ Route   /api/workouts/:id
// @ Decs    Updated workout
// router.put('/api/workouts/:id', async ({ body, params }, res) => {
//   try {
//     const workout = await workoutDB.Workout.findByIdAndUpdate(
//       params.id,
//       { $push: { exercised: body } },
//       { new: true }
//     );

//     res.json(workout);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// @ PUT
// @ Route   /api/workouts/:id
// @ Decs    Updated workout
router.put('/api/workouts/:id', (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// @ DELETE
// @ Route   /api/workouts/
// @ decs    Delete workout by id
// router.delete('/api/workouts', async ({ body }, res) => {
//   try {
//     const workout = await workoutDB.Workout.findByIdAndRemove(body.id);

//     res.json(workout);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// @ GET
// @ Route   /api/workouts/range
// @ decs    Get workout by range
// router.get('/api/workouts/range', async ({ body }, res) => {
//   try {
//     const workout = await workoutDB.Workout
//     .find({})
//     .limit(10);

//     res.json(workout);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// @ GET
// @ Route   /api/workouts/range
// @ decs    Get workout by range
router.get('/api/workouts/range', (req, res) => {
  db.Workout.find({})
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
