const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  confirmpassword: String,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
