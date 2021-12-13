const router = require('express').Router();
let Course = require('../models/course.model');

router.route('/').get((req, res) => {
    Course.find()
        .then(courses => res.json(courses))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const location = req.body.location;
    const holes = req.body.holes;
    const par = req.body.par;

    const newCourse = new Course({
        name,
        location,
        holes,
        par
    });

    newCourse.save()
    .then(() => res.json('Course added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
    Course.findById(req.params.id)
    .then (course => res.json(course))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Course.findByIdAndDelete(req.params.id)
    .then(() => res.json('Course deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Course.findById(req.params.id)
    .then(course=> {
        course.name = req.body.name;
        course.location = req.body.location;
        course.holes = req.body.holes;
        course.par = req.body.par;

        course.save()
        .then(() => res.json('Course updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;