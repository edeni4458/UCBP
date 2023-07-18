const mongoose = require('mongoose')

const EpisodeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minLength: [5, "title must be 5 characters long"]
    },
    date: {
        type: String,
        required: [true, "date is required"],
        minLength: [5, "date must be 5 characters long"]
    },
    rating: {
        type: Number,
        min: [1, "rating must be between 1 - 10"],
        max: [10, "rating must be between 1 - 10"]
    },
    top50:{
        type: Boolean,
        required: [false]
    },
    episode: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('Episode', EpisodeSchema)