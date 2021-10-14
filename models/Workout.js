const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excerises: [
        {
            name: {
                type: String,
                trim: true,
            },
            type: {
                type: String,
                trim: true,
            },
            weight: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            },
            duration: Number,
        }
    ],
    totalduration: {
        type: Number,
        default: 0
    }
})

module.exports = Workout = mongoose.model("workout", WorkoutSchema)