# Workout Tracker

### Tech Used:

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### Description:

This app is a simple to use work out tracker that can be used to log and store workout sessions. The user can view the Dashboard to see a running total of workout stats such as workout times, and total weight trained with.

### Code Snippets:

#### Function used to calculate workout duration's totals which are used to render the graphs on the dashboard and the summary of the workout on the landing page.
```
WorkoutSchema.virtual('totalDuration').get(function() {
    const totalDuration = this.exercises.reduce((partial_sum, exercise) => {
        return partial_sum + exercise.duration;
    }, 0)

    return totalDuration;
})

```

#### Route for updating a current workout.
```
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
```

### Screenshots: 
#### Landing Page
![Workout Screenshot One](public\assets\imgs\workout1.png)
#### Adding or Updating Workout
![Workout Screenshot Two](public\assets\imgs\workout2.png)
#### Dashboard displaying workout statistics
![Workout Screenshot Three](public\assets\imgs\workout3.png)


### Deployed Links:

[Workout Tracker](https://dry-tundra-54058.herokuapp.com/)

### Licensing:

[![license](https://img.shields.io/badge/license-MIT-blue)](https://shields.io)

### Contact:

- Github: [ZakkFast](https://github.com/ZakkFast)
- Email: webdev@zakkfast.com

[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=ZakkFast&theme=dark)](https://github.com/anuraghazra/github-readme-stats)
