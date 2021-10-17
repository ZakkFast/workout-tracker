const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excerises: [
        {
            type: {
                type: String
            },
            name: {
                tpye: String
            },
            duration: Number,
            weight: {
                type: Number,
            },
            reps: {
                type: Number
            },
            set: {
                type: Number
            },
            distance : {
                type: Number
            }
        }
    ],
    totalduration: {
        type: Number,
        default: 0
    }
})

module.exports = Workout = mongoose.model("workout", WorkoutSchema)