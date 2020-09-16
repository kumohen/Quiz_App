const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const questionSchema = new mongoose.Schema({
  que_title: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },
  option4: {
    type: String,
    required: true,
  },
  ans: {
    type: String,
    required: true,
  },
});

mongoose.model("Question", questionSchema);
