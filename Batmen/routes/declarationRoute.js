const express = require("express");
const router = express.Router();
const Declare = require("../models/declare");

router.post("/register", async (req, res) => {
  try {
    data = req.body;
    declare = new Declare(data);
    let saveddeclare = await declare.save();
    res.status(200).send(saveddeclare);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/getall", (req, res) => {
  Declare.find()
    .then((allDeclares) => {
      res.status(200).send(allDeclares);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Declare.find({ _id: req.params.id })
    .then((allDeclares) => {
      res.status(200).send(allDeclares);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});



module.exports = router;
