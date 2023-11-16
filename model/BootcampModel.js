const mongoose = require("mongoose");

const bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name to the bootcamp"],
    unique: true,
  },
  ratings: {
    type: Number,
    required: [true, "Please provide a rating to the bootcamp"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Please provide a description to the bootcamp"],
  },
  price: {
    type: Number,
    required: [true, "please provide a description to the bootcamp"],
  },
});

const Bootcamp = mongoose.model("BootCamp", bootcampSchema);

module.exports = Bootcamp;
