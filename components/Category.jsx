import ShoeCard from "./ShoeCard";

const Category = ({ shoes, category }) => {
  return (
    <div>
      {/* Dekstop */}
      <div className="hidden sm:block">
        <div className="m-10 text-xl font-bold flex">
          <div className="flex-1">
            {category === "men" ? <h1>Men's Shoes</h1> : <></>}
            {category === "women" ? <h1>Women's Shoes</h1> : <></>}
            {category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
          </div>
        </div>

        <div className="m-10 flex gap-4 justify-center">
          {shoes.map((shoe) =>
            shoe.category === category ? (
              <div className="">
                <ShoeCard id={shoe._id} name={shoe.name} price={shoe.price} />
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden block">
        <div className="m-10 text-xl font-bold flex text-center">
          <div className="flex-1">
            {category === "men" ? <h1>Men's Shoes</h1> : <></>}
            {category === "women" ? <h1>Women's Shoes</h1> : <></>}
            {category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {shoes.map((shoe) =>
            shoe.category === category ? (
              <div className="basis-44">
                <ShoeCard id={shoe._id} name={shoe.name} price={shoe.price} />
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
