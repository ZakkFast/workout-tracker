const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance : {
                type: Number
            }
        }
    ],
    // totalDuration: {
    //     type: Number,
    //     default: 0
    // }
}, opts)
WorkoutSchema.virtual('totalDuration').get(function() {
    const totalDuration = this.exercises.reduce((partial_sum, exercise) => {
        return partial_sum + exercise.duration;
    }, 0)

    return totalDuration;
})

module.exports = Workout = mongoose.model("workout", WorkoutSchema)