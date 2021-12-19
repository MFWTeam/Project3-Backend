const User = require("../models/user");

const saveUser = (req, res) => {
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
    .then((result) => res.json(result))
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
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      isDeleted: true,
    },
    (err, user) => {
      res.json(user);
    }
  );
};

const updateUser = (req, res) => {
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
      res.json(user);
    }
  );
};

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

module.exports = {
  saveUser,
  showUsers,
  deleteUser,
  updateUser,
  showUser,
  signInUser,
};
