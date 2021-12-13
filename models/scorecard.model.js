const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const scorecardSchema = new Schema({

    username: { type: String, require: true},
    course: { type: String, required: true},
    score: { type: Number, required: true},
    date: { type: Date, required: true},
    par: {type: Number},
    scores: [{par: Number}]
}, {
    timestamps: true,
});

const Scorecard = mongoose.model('Scorecard', scorecardSchema);

module.exports = Scorecard;