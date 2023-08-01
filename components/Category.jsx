import Image from "next/image";
import ShoeCard from "./ShoeCard";
import { shoes } from "@/public/data";
import { Sort } from "@mui/icons-material";

const Category = ({ category }) => {
  return (
    <div>
      <div className="m-10 text-xl font-bold flex">
        <div className="flex-1">
          {category === "men" ? <h1>Men's Shoes</h1> : <></>}
          {category === "women" ? <h1>Women's Shoes</h1> : <></>}
          {category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
        </div>
        <div className="flex-1 text-end">
          <Sort />
        </div>
      </div>

      <div className="m-10 flex gap-5 justify-center">
        {shoes.map((shoe) =>
          shoe.category === category ? (
            <ShoeCard name={shoe.name} price={shoe.price} />
          ) : (
            <></>
          )
        )}
      </div>

      {/* <div className="mt-20 ml-10 mr-10">
        <Image
          src={"/Category/" + category + ".png"}
          alt={category}
          width={2000}
          height={200}
        />
      </div> */}
    </div>
  );
};

export default Category;
