import Image from "next/image";

const ShoePage = ({ shoe }) => {
  return (
    <div>
      <div className="flex justify-center text-center">
        <div className="mt-20 flex-1 flex justify-center gap-4">
          <div className="flex flex-col gap-2">
            <Image
              src={"/" + shoe.name + "/main.png"}
              alt={shoe.name}
              width={100}
              height={100}
            />
            <Image
              src={"/" + shoe.name + "/alt.png"}
              alt={shoe.name}
              width={100}
              height={100}
            />
            <Image
              src={"/" + shoe.name + "/shoe.png"}
              alt={shoe.name}
              width={100}
              height={100}
            />
          </div>
          <div className="flex">
            <Image
              src={"/" + shoe.name + "/main.png"}
              alt={shoe.name}
              width={500}
              height={500}
            />
            {/* <Image
              src={"/" + shoe.name + "/alt.png"}
              alt={shoe.name}
              width={500}
              height={500}
            />
            <Image
              src={"/" + shoe.name + "/shoe.png"}
              alt={shoe.name}
              width={500}
              height={500}
            /> */}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2 mt-20">
          <h1 className="text-2xl font-bold">{shoe.name}</h1>
          <div className="text-lg">
            {shoe.category === "men" ? <h1>Men's Shoes</h1> : <></>}
            {shoe.category === "women" ? <h1>Women's Shoes</h1> : <></>}
            {shoe.category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
          </div>
          <h1 className="mt-4 text-lg">€{shoe.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default ShoePage;
