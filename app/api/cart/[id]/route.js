import cartModel from "@/models/cart";
import { connectToDB } from "@/utils/databse";

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await cartModel.findByIdAndRemove(params.id);

    return new Response("Deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete shoe", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { size } = await request.json();

  try {
    await connectToDB();

    const existingShoe = await cartModel.findById(params.id);

    if (!existingShoe) return new Response("Shoe not found", { status: 404 });

    existingShoe.size = size;
    await existingShoe.save();

    return new Response("Updated size successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to update size", { status: 500 });
  }
};
