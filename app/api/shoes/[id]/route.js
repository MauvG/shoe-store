import shoesModel from "@/models/shoes";
import { connectToDB } from "@/utils/databse";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const shoesData = await shoesModel.findById(params.id).populate("name");

    return new Response(JSON.stringify(shoesData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch shoe from id", { status: 500 });
  }
};
