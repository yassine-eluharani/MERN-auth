const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, "shhh", {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

module.exports = { User };
