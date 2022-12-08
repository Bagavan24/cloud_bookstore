const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  cost: Number,
  status: String,
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
