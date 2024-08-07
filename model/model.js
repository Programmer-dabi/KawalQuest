const Mongoose = require("mongoose");

const playersSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    Points:{
        type: Number,
        required: true,
        default: 0,
    },
    DateCreated:{
        type: Date,
        required: true,
        default: Date.now,
    }
})

module.exports = Mongoose.model('Player', playersSchema)