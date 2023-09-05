import shoesModel from "@/models/shoes";
import { connectToDB } from "@/utils/databse";

export const GET = async (request) => {
  try {
    await connectToDB();

    const shoesData = await shoesModel.find({}).populate("name");

    return new Response(JSON.stringify(shoesData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all shoes", { status: 500 });
  }
};
