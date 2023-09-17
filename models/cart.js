import { Schema, model, models } from "mongoose";

const cartSchema = new Schema({
  user: String,
  name: String,
  category: String,
  price: Number,
  size: Number,
});

const cartModel = models.cart_items || model("cart_items", cartSchema);

export default cartModel;
