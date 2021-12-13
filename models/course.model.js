const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({

    name: { type: String, require: true},
    location: { type: String, required: true},
    holes: [{par: Number}],
    par: {type: Number}
}); 

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;