const User = require("../models/user");

const saveUser = (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    address: req.body.address,
  });

  newUser
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

const showUsers = (req, res) => {
  User.find({}, (err, user) => {
    res.json(user);
  });
};

module.exports = { saveUser, showUsers };
