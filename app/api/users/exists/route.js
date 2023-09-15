import userModel from "@/models/users";
import { connectToDB } from "@/utils/databse";

export const POST = async (request) => {
  try {
    const { username } = await request.json();

    await connectToDB();

    const existingUser = await userModel.findOne({ username }).select("_id");

    return new Response(JSON.stringify(existingUser), { status: 200 });
  } catch (error) {
    return new Response("Failed to create new user", { status: 500 });
  }
};
