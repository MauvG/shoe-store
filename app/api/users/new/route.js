import userModel from "@/models/users";
import { connectToDB } from "@/utils/databse";

export const POST = async (request) => {
  const { username, password } = await request.json();

  try {
    await connectToDB();

    const newUser = new userModel({ username, password });
    await newUser.save();

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new user", { status: 500 });
  }
};
