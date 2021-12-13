const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const rounds_played = req.body.rounds_played;
    const worst_score = req.body.worst_score;
    const best_score = req.body.best_score;
    const newUser = new User( { username, rounds_played, worst_score, best_score});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then (user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
    .then(user=> {
        user.username = req.body.username;
        user.rounds_played = req.body.rounds_played;
        user.best_score = req.body.best_score;
        user.worst_score = req.body.worst_score;

        user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;