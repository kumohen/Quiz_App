const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Question = mongoose.model("Question");

router.get("/questions", (req, res) => {
  Question.find()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/question/:id", (req, res) => {
  Question.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/addQustion", (req, res) => {
  const { que_title, option1, option2, option3, option4, ans } = req.body;
  if (!que_title || !option1 || !option2 || !option3 || !option4 || !ans) {
    return res.status(422).json({ error: "Plase add all the fields" });
  }
  const question = new Question({
    que_title,
    option1,
    option2,
    option3,
    option4,
    ans,
  });
  question
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
