import { Schema, model, models } from "mongoose";

const shoesSchema = new Schema({
  name: String,
  category: String,
  desc: String,
  featured: Boolean,
  price: Number,
});

const shoesModel = models.shoes || model("shoes", shoesSchema);

export default shoesModel;
