const Pkm = require("../models/pkm");

//Create and save a new Pkm
exports.create = (req, res) => {
  console.log("controllet",req.body);
  const postPkm = req.body;

  const pkm = new Pkm({
    name: postPkm.name,
    type: postPkm.type,
    level: postPkm.level,
  });
  pkm
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// Retrieve and return all pkms from the database.
exports.findAll = (req, res) => {
  Pkm.find()
    .then((pkms) => {
      res.send(pkms);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// Find a single pkm with a pkmId
exports.findOne = (req, res) => {
  Pkm.findById(req.params.pkmId)
    .then((pkm) => {
      if (!pkm) {
        return res.status(404).send({
          message: "Pkm not found with id " + req.params.pkmId,
        });
      }
      res.send(pkm);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Pkm not found with id " + req.params.pkmId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving pkm with id " + req.params.pkmId,
      });
    });
};

//delete a pkm with the specified pkmId in the request
exports.delete = (req, res) => {
  Pkm.findByIdAndRemove(req.params.pkmId)
    .then((pkm) => {
      if (!pkm) {
        return res.status(404).send({
          message: "Pkm not found with id " + req.params.pkmId,
        });
      }
      res.send({ message: "Pkm deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Pkm not found with id " + req.params.pkmId,
        });
      }
      return res.status(500).send({
        message: "Could not delete pkm with id " + req.params.pkmId,
      });
    });
};

// Update a pkm identified by the pkmId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.name) {
    return res.status(400).send({
      message: "Pkm name can not be empty",
    });
  }

  // Find pkm and update it with the request body
  Pkm.findByIdAndUpdate(
    req.params.pkmId,
    {
      name: req.body.name,
      type: req.body.type,
      level: req.body.level,
    },
    { new: true }
  )
    .then((pkm) => {
      if (!pkm) {
        return res.status(404).send({
          message: "Pkm not found with id " + req.params.pkmId,
        });
      }
      res.send(pkm);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Pkm not found with id " + req.params.pkmId,
        });
      }
      return res.status(500).send({
        message: "Error updating pkm with id " + req.params.pkmId,
      });
    });
};

// login
exports.login = (req, res) => {
  console.log(req.body);
  const postPkm = req.body;

  const pkm = new Pkm({
    name: postPkm.name,
    type: postPkm.type,
    level: postPkm.level,
  });
  pkm
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
