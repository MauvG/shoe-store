import ShoeCard from "./ShoeCard";

const Category = ({ shoes, category }) => {
  return (
    <div className="">
      {/* Dekstop */}
      <div className="hidden sm:block">
        <div className="m-12 mb-0 text-xl font-bold flex">
          <div className="flex-1">
            {category === "men" ? <h1>Men's Shoes</h1> : <></>}
            {category === "women" ? <h1>Women's Shoes</h1> : <></>}
            {category === "kids" ? <h1>Kids' Shoes</h1> : <></>}
          </div>
        </div>

        <div className="m-10 flex items-center justify-center">
          {shoes.map((shoe) =>
            shoe.category === category ? (
              <div key={shoe._id} className="m-2">
                <ShoeCard id={shoe._id} name={shoe.name} price={shoe.price} />
              </div>
            ) : (
              <div key={shoe._id}></div>
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

        <div className="flex flex-wrap items-center justify-center">
          {shoes.map((shoe) =>
            shoe.category === category ? (
              <div key={shoe._id} className="basis-44 m-1">
                <ShoeCard id={shoe._id} name={shoe.name} price={shoe.price} />
              </div>
            ) : (
              <div key={shoe._id}></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
