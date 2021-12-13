const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },
        rounds_played: {
            type: Number,
        },
        best_score: {
            type: Number,
        },
        worst_score: {
            type: Number,
        },
    }, 
    { timestamps:true, },

);

const User = mongoose.model('User', userSchema);
module.exports = User;