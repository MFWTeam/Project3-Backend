const Store = require("../models/store");

const saveStore = (req, res) => {
  const newStore = new Store({
    name: req.body.name,
    managerName: req.body.managerName,
  });

  newStore
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

const showStores = (req, res) => {
  Store.find({ isDeleted: false })
    .populate("managerName")
    .exec((err, store) => {
      res.json(store);
    });
};

const showStore = (req, res) => {
  Store.find({ _id: req.params.id, isDeleted: false })
    .populate("managerName")
    .exec((err, store) => {
      res.json(store);
    });
};

const deleteStore = (req, res) => {
  Store.findByIdAndUpdate(
    { _id: req.params.id },
    {
      isDeleted: true,
    },
    (err, store) => {
      res.json(store);
    }
  );
};

const updateStore = (req, res) => {
  Store.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      role: req.body.role,
      address: req.body.address,
    }
  )
    .populate("managerName")
    .exec((err, store) => {
      res.json(store);
    });
};

module.exports = { saveStore, showStores, deleteStore, updateStore, showStore };