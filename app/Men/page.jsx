import Category from "@/components/Category";
import { getShoesData } from "../page";

const page = async () => {
  const shoesData = await getShoesData();

  return (
    <div>
      <Category shoes={shoesData} category="men" />
    </div>
  );
};

export default page;
