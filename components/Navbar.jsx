import { ShoppingCartOutlined } from "@mui/icons-material";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="p-5 tracking-wider">
        {/* Desktop Navbar */}
        <div className="sm:flex hidden justify-between items-center">
          <div className="flex-1 flex items-center">
            <Link
              href="/"
              className="text-3xl font-bold cursor-pointer hover:underline"
            >
              MG Footwear
            </Link>
          </div>

          <div className="flex-1 flex gap-5 text-lg font-bold pt-1 items-center text-center justify-center">
            <Link href="/men" className="hover:underline cursor-pointer">
              Men
            </Link>
            <Link href="/women" className="hover:underline cursor-pointer">
              Women
            </Link>
            <Link href="/kids" className="hover:underline cursor-pointer">
              Kids
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-end">
            <Link href="/Cart">
              <ShoppingCartOutlined
                fontSize="large"
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="sm:hidden flex-col justify-between text-center">
          <div>
            <Link
              href="/"
              className="text-3xl font-bold cursor-pointer hover:underline"
            >
              MG Footwear
            </Link>
          </div>

          <div className="flex gap-10 pt-5 text-lg font-semibold justify-center">
            <Link href="/men" className="hover:underline cursor-pointer">
              Men
            </Link>
            <Link href="/women" className="hover:underline cursor-pointer">
              Women
            </Link>
            <Link href="/kids" className="hover:underline cursor-pointer">
              Kids
            </Link>
          </div>

          <div className="pt-5">
            <Link href="/Cart">
              <ShoppingCartOutlined
                fontSize="large"
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </nav>

      <div className="bg-cyan-600 text-center text-white p-1">
        Use code: LAUNCH for 10% Off!
      </div>
    </div>
  );
};

export default Navbar;
