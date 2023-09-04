import { Schema, model, models } from "mongoose";

const shoesSchema = new Schema({
  name: String,
  cart: Boolean,
  category: String,
  desc: String,
  featured: Boolean,
  price: Number,
  size: Number,
});

const shoesModel = models.shoes || model("shoes", shoesSchema);

export default shoesModel;
