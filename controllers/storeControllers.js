const Store = require("../models/store");

const saveStore = (req, res) => {
  const token = req.user;
  const newStore = new Store({
    name: req.body.name,
    managerName: req.body.managerName,
  });

  newStore
    .save()
    .then((result) => res.json({ result: result, token: token }))
    .catch((err) => console.log(err));
};

const showStores = (req, res) => {
  Store.find({ isDeleted: false }, (err, store) => {
    res.json(store);
  });
};

const showStore = (req, res) => {
  Store.find({ _id: req.params.id, isDeleted: false }, (err, store) => {
    res.json(store);
  });
};

const showStoreByName = (req, res) => {
  Store.find({ name: req.params.name, isDeleted: false }, (err, store) => {
    res.json(store);
  });
};

const deleteStore = (req, res) => {
  const token = req.user;
  Store.findByIdAndUpdate(
    { _id: req.params.id },
    {
      isDeleted: true,
    },
    (err, store) => {
      res.json({ result: store, token: token });
    }
  );
};

const updateStore = (req, res) => {
  const token = req.user;
  Store.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      managerName: req.body.managerName,
    },
    (err, store) => {
      res.json({ result: store, token: token });
    }
  );
};

module.exports = {
  saveStore,
  showStores,
  deleteStore,
  updateStore,
  showStore,
  showStoreByName,
};
