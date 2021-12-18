const Role = require("../models/role");

const saveRole = (req, res) => {
  const newRole = new Role({
    name: req.body.name,
  });

  newRole
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

const showRoles = (req, res) => {
  Role.find({ isDeleted: false }, (err, role) => {
    res.json(role);
  });
};

const showRole = (req, res) => {
  Role.find({ _id: req.params.id, isDeleted: false }, (err, role) => {
    res.json(role);
  });
};

const deleteRole = (req, res) => {
  Role.findByIdAndUpdate(
    { _id: req.params.id },
    {
      isDeleted: true,
    },
    (err, role) => {
      res.json(role);
    }
  );
};

const updateRole = (req, res) => {
  Role.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
    },
    (err, role) => {
      res.json(role);
    }
  );
};

module.exports = { saveRole, showRoles, deleteRole, updateRole, showRole };