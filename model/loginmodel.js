const Mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const playersSchema = new Mongoose.Schema({
    Username: {
        type: String,
        required: true,
    },
    Password:{
        type: String,
        required: [true, 'Password is required'],
        select: false,
    },
    Points:{
        type: Number,
        required: true,
        default: 0,
    },
    //add items here and there for cross connection later
    DateCreated:{
        type: Date,
        required: true,
        default: Date.now,
    }
})

playersSchema.pre('save', async function (next) {
try {
    // Only hash if password is modified or new
    if (!this.isModified('Password')) return next();

    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    this.Password = await bcrypt.hash(this.Password, salt);
    next();
} catch (err) {
    next(err);
}
});

// Method to compare entered password with hashed password
// playersSchema.methods.comparePassword = async function (candidatePassword) {
// return bcrypt.compare(candidatePassword, this.password);
// };

// Create and export the model
const User = Mongoose.model('User', playersSchema);
module.exports = User;
