import Image from "next/image";
import Link from "next/link";

const Explore = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-10 mb-5 ">Explore</h1>

      {/* Desktop */}
      <div className="hidden sm:flex text-center text-2xl justify-center gap-5 pl-10 pr-10">
        <div className="">
          <Link href="/men">
            <div className="absolute bg-white rounded-full hover:bg-black hover:text-white  shadow-lg m-5 ml-4 p-2 pr-4 pl-4">
              <h1 className="text-lg">Men</h1>
            </div>
            <Image
              src="/Navigation/men.png"
              alt="Men"
              width={500}
              height={500}
              className="object-cover"
            />
          </Link>
        </div>

        <div className="">
          <Link href="/women">
            <div className="absolute bg-white rounded-full hover:bg-black hover:text-white shadow-lg m-5 ml-4 p-2 pr-4 pl-4">
              <h1 className="text-lg">Women</h1>
            </div>
            <Image
              src="/Navigation/women.png"
              alt="Men"
              width={500}
              height={500}
              className="object-cover"
            />
          </Link>
        </div>

        <div className="">
          <Link href="/kids">
            <div className="absolute bg-white rounded-full hover:bg-black hover:text-white shadow-lg m-5 ml-4 p-2 pr-4 pl-4">
              <h1 className="text-lg">Kids</h1>
            </div>
            <Image
              src="/Navigation/kids.png"
              alt="Men"
              width={500}
              height={500}
              className="object-cover"
            />
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex flex-col justify-center items-center text-center text-2xl">
        <div className="m-1">
          <Link href="/men">
            <div className="absolute bg-white rounded-full shadow-lg m-5 ml-4 p-2 pr-4 pl-4">
              <h1 className="text-lg">Men</h1>
            </div>
            <Image
              src="/Navigation/men.png"
              alt="Men"
              width={300}
              height={300}
              className="object-cover"
            />
          </Link>
        </div>

        <div className="m-1">
          <Link href="/women">
            <div className="absolute bg-white rounded-full shadow-lg m-5 ml-4 p-2 pr-4 pl-4">
              <h1 className="text-lg">Women</h1>
            </div>
            <Image
              src="/Navigation/women.png"
              alt="Men"
              width={300}
              height={300}
              className="object-cover"
            />
          </Link>
        </div>

        <div className="m-1">
          <Link href="/kids">
            <div className="absolute bg-white rounded-full shadow-lg m-5 ml-4 p-2 pr-4 pl-4">
              <h1 className="text-lg">Kids</h1>
            </div>
            <Image
              src="/Navigation/kids.png"
              alt="Men"
              width={300}
              height={300}
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
