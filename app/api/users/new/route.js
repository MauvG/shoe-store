import userModel from "@/models/users";
import { connectToDB } from "@/utils/databse";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  try {
    const { username, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectToDB();

    const newUser = new userModel({ username, password: hashedPassword });
    await newUser.save();

    return new Response(JSON.stringify(newUser), { status: 200 });
  } catch (error) {
    return new Response("Failed to create new user", { status: 500 });
  }
};
