const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
            duration: Number,
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
    totalDuration: {
        type: Number,
        default: 0
    }
})

module.exports = Workout = mongoose.model("workout", WorkoutSchema)