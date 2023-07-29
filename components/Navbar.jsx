import { ShoppingCartOutlined } from "@mui/icons-material";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-5 tracking-wider">
      {/* Desktop Navbar */}
      <div className="sm:flex hidden justify-between">
        <div>
          <Link
            href="/"
            className="text-3xl font-bold cursor-pointer hover:underline"
          >
            MG Footwear
          </Link>
        </div>

        <div className="flex gap-10 pt-2 text-lg font-semibold">
          <Link href="/Men" className="hover:underline cursor-pointer">
            Men
          </Link>
          <Link href="/Women" className="hover:underline cursor-pointer">
            Women
          </Link>
          <Link href="/Kids" className="hover:underline cursor-pointer">
            Kids
          </Link>
        </div>

        <div>
          <Link href="/Cart">
            <ShoppingCartOutlined fontSize="large" className="cursor-pointer" />
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
          <Link href="/Men" className="hover:underline cursor-pointer">
            Men
          </Link>
          <Link href="/Women" className="hover:underline cursor-pointer">
            Women
          </Link>
          <Link href="/Kids" className="hover:underline cursor-pointer">
            Kids
          </Link>
        </div>

        <div className="pt-5">
          <Link href="/Cart">
            <ShoppingCartOutlined fontSize="large" className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
