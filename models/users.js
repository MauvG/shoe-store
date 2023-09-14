import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: String,
  password: String,
});

const userModel = models.users || model("users", userSchema);

export default userModel;
