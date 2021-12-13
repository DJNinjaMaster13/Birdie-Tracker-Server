const router = require('express').Router();
let Scorecard = require('../models/scorecard.model');

router.route('/').get((req, res) => {
    Scorecard.find()
        .then(scorecards => res.json(scorecards))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const course = req.body.course;
    const score = Number(req.body.score);
    const date = Date.parse(req.body.date);
    const scores = req.body.scores;
    const par = req.body.par;

    const newScorecard = new Scorecard({
        username, 
        course,
        score,
        date,
        scores,
        par,
    });

    newScorecard.save()
    .then(() => res.json('Scorecard added !'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
    Scorecard.findById(req.params.id)
    .then (scorecard => res.json(scorecard))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Scorecard.findByIdAndDelete(req.params.id)
    .then(() => res.json('Scorecard deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Scorecard.findById(req.params.id)
    .then(scorecard=> {
        scorecard.username = req.body.username;
        scorecard.course = req.body.course;
        scorecard.score = Number(req.body.score);
        scorecard.date = Date.parse(req.body.date);
        scorecard.scores = req.body.scores;
        scorecard.par = req.body.par;

        scorecard.save()
        .then(() => res.json('Scorecard updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;