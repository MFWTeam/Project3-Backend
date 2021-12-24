const Tracking = require("../models/userTracking");

const saveUserTracking = (req, res) => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes();
  const dateTime = date + " " + time;

  const newTracking = new Tracking({
    username: req.body.username,
    action: req.body.action,
    date: dateTime,
  });

  newTracking
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

const showUsersTracking = (req, res) => {
  Tracking.find({}, (err, track) => {
    res.json(track);
  });
};

module.exports = {
  saveUserTracking,
  showUsersTracking,
};
