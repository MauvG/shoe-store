import Image from "next/image";

const ShoePage = ({ shoe }) => {
  const sizes = [];
  for (let index = 5; index <= 15; index += 0.5) {
    sizes.push(index);
  }

  return (
    <div>
      <div className="m-20 flex justify-center text-center">
        <div className="flex-1 flex flex-col justify-end gap-4">
          <div className="flex gap-2 justify-center">
            <Image
              src={"/" + shoe.name + "/main.png"}
              alt={shoe.name}
              width={75}
              height={75}
            />
            <Image
              src={"/" + shoe.name + "/alt.png"}
              alt={shoe.name}
              width={75}
              height={75}
            />
            <Image
              src={"/" + shoe.name + "/shoe.png"}
              alt={shoe.name}
              width={75}
              height={75}
            />
          </div>
          <div className="flex">
            <Image
              src={"/" + shoe.name + "/main.png"}
              alt={shoe.name}
              width={750}
              height={750}
              className="object-contain"
            />
            {/* <Image
              src={"/" + shoe.name + "/alt.png"}
              alt={shoe.name}
              width={750}
              height={750}
            />
            <Image
              src={"/" + shoe.name + "/shoe.png"}
              alt={shoe.name}
              width={750}
              height={750}
            /> */}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{shoe.name}</h1>
          <div className="text-lg">
            {shoe.category === "men" ? <h1>Men's Shoes</h1> : <></>}
            {shoe.category === "women" ? <h1>Women's Shoes</h1> : <></>}
            {shoe.category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
          </div>
          <h1 className="mt-4 text-lg">€{shoe.price}</h1>

          <h1 className="mt-10 text-lg font-medium">Select Size</h1>
          <div className="grid grid-cols-3 gap-2 ml-[10vw] mr-[10vw] text-lg">
            {sizes.map((size) => (
              <button className="border rounded-md p-3 shadow hover:border-black">
                {size}
              </button>
            ))}
          </div>

          <div>
            <button className="bg-black text-white rounded-full mt-4 p-4 pl-10 pr-10 shadow">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoePage;
