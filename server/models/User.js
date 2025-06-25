const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isAdmin: { type: Boolean,enum: ["user", "admin"], default: false },
});

module.exports = mongoose.model("User", userSchema);
