import userModel from "@/models/users";
import { connectToDB } from "@/utils/databse";

export const GET = async (request) => {
  try {
    await connectToDB();

    const usersData = await userModel.find({}).populate("username");

    return new Response(JSON.stringify(usersData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all users", { status: 500 });
  }
};
