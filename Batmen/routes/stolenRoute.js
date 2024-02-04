const express = require("express");
const router = express.Router();
const Stolen = require("../models/stolen");

router.post("/register", async (req, res) => {
  try {
    data = req.body;
    stolen = new Stolen(data);
    let savedStolen = await stolen.save();
    res.status(200).send(savedStolen);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/getall", (req, res) => {
  Stolen.find()
    .then((allStolen) => {
      res.status(200).send(allStolen);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Stolen.find({ _id: req.params.id })
    .then((allStolen) => {
      res.status(200).send(allStolen);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});


module.exports = router;
