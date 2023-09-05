import cartModel from "@/models/cart";
import { connectToDB } from "@/utils/databse";

export const POST = async (request) => {
  const { name, category, price, size } = await request.json();

  try {
    await connectToDB();

    const newCartItem = new cartModel({ name, category, price, size });
    await newCartItem.save();

    return new Response(JSON.stringify(newCartItem), { status: 201 });
  } catch (error) {
    return new Response("Failed to add to cart", { status: 500 });
  }
};
