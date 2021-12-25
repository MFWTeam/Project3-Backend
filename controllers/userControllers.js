const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const saveUser = (req, res) => {
  const token = req.user;
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    address: req.body.address,
    role: req.body.role,
  });

  newUser
    .save()
    .then((result) => res.json({ result: result, token: token }))
    .catch((err) => console.log(err));
};

const showUsers = (req, res) => {
  User.find({ isDeleted: false }, (err, user) => {
    res.json(user);
  });
};

const showUser = (req, res) => {
  User.find({ _id: req.params.id, isDeleted: false }, (err, user) => {
    res.json(user);
  });
};

const deleteUser = (req, res) => {
  const token = req.user;
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      isDeleted: true,
    },
    (err, user) => {
      res.json({ result: user, token: token });
    }
  );
};

const updateUser = (req, res) => {
  const token = req.user;
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      role: req.body.role,
      address: req.body.address,
    },
    (err, user) => {
      res.json({ result: user, token: token });
    }
  );
};

async function updateUserPassword(req, res) {
  const token = req.user;
  User.findOne({ _id: req.params.id }, async (err, result) => {
    if (result === null) {
      return res.status(400).send("Cannot find user");
    }

    try {
      if (await bcrypt.compare(req.body.prePassword, result.password)) {
        User.findByIdAndUpdate(
          { _id: req.params.id },
          {
            password: await bcrypt.hash(req.body.newPassword, 10),
          },
          (err, user) => {
            res.json({ result: user, token: token });
          }
        );
      } else {
        res.json({ message: "current password is incorrect" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
  });
}

function signInUser(req, res) {
  User.findOne(
    { email: req.body.email, isDeleted: false },
    async (err, result) => {
      if (result === null) {
        return res.status(400).send("Cannot find user");
      }

      try {
        if (await bcrypt.compare(req.body.password, result.password)) {
          const payload = {
            id: result._id,
            name: result.name,
            role: result.role,
          };

          const token = jwt.sign(payload, process.env.SECRET_KEY);
          res.json({ message: "user logged in", token: token });
        } else {
          res.json({ message: "data is incorrect" });
        }
      } catch (error) {
        console.log(error);
        res.status(500).send();
      }
    }
  );
}

function getUserDataFromToken(req, res) {
  const token = req.user;
  res.json({ token: token });
}

module.exports = {
  saveUser,
  showUsers,
  deleteUser,
  updateUser,
  showUser,
  signInUser,
  updateUserPassword,
  getUserDataFromToken,
};
