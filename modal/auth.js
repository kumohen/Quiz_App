const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
  image: {
    type: String,
  },
  resetToken: String,
  expireToken: Date,
});

mongoose.model("User", userSchema);
