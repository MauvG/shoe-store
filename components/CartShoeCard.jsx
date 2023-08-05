import { DeleteOutlineOutlined, KeyboardArrowDown } from "@mui/icons-material";
import Image from "next/image";

const CartShoeCard = ({ shoe }) => {
  return (
    <div id="CartShoeCard" className="flex">
      <div>
        <Image
          src={"/" + shoe.name + "/main.png"}
          alt={shoe.name}
          width={150}
          height={150}
          loading="eager"
          className="h-[150px] object-cover"
        />
      </div>
      <div className="ml-10 flex flex-col gap-1">
        <h1 className="text-lg font-medium">{shoe.name}</h1>
        <div className="opacity-75">
          {shoe.category === "men" ? <h1>Men's Shoes</h1> : <></>}
          {shoe.category === "women" ? <h1>Women's Shoes</h1> : <></>}
          {shoe.category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
        </div>
        <div className="flex gap-4">
          <h1 className="">
            Size UK {shoe.size + " "}
            <button>
              <KeyboardArrowDown />
            </button>
          </h1>
          <h1 className="">
            Quantity {shoe.quantity + " "}
            <button>
              <KeyboardArrowDown />
            </button>
          </h1>
        </div>
        <button className="text-left mt-8">
          <DeleteOutlineOutlined />
        </button>
      </div>
    </div>
  );
};

export default CartShoeCard;
