const Mongoose = require("mongoose");

const playersSchema = new Mongoose.Schema({
    id: {
        type: String,
        default: new mongoose.Types.ObjectId(),
        required: true,
    }, 
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