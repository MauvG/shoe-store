import cartModel from "@/models/cart";
import { connectToDB } from "@/utils/databse";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const userId = params.user;

    const cartData = await cartModel.find({}).populate("name");

    const userData = [];
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].user == userId) {
        userData.push(cartData[i]);
      }
    }

    return new Response(JSON.stringify(userData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch cart", { status: 500 });
  }
};
