const Tracking = require("../models/userTracking");

const saveUserTracking = (req, res) => {
    const newTracking = new Tracking({
        username: req.body.username,
        action: req.body.action,
        date: Date.now()
    });

    newTracking
        .save()
        .then((result) => res.json(result))
        .catch((err) => console.log(err));
};

const showUsersTracking = (req, res) => {
    Tracking.find({}, (err, track) => {
        console.log(track);
        res.json(track);
    });
};

module.exports = {
    saveUserTracking,
    showUsersTracking,
};
