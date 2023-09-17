import cartModel from "@/models/cart";
import { connectToDB } from "@/utils/databse";

export const GET = async (request) => {
  try {
    await connectToDB();

    const cartData = await cartModel.find({}).populate("name");

    return new Response(JSON.stringify(cartData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch cart", { status: 500 });
  }
};
