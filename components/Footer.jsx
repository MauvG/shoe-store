"use client";

import { Email, GitHub, LinkedIn, Phone, Room } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="bg-zinc-900 text-white mt-20">
        {/* Dekstop */}
        <div className="md:flex hidden p-10 justify-between">
          <div className="p-5">
            <h1 className="font-bold">Useful Links</h1>
            <div className="pt-4 flex flex-col gap-2 text-zinc-500 font-light text-sm">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/Men" className="hover:text-white">
                Men
              </Link>
              <Link href="/Women" className="hover:text-white">
                Women
              </Link>
              <Link href="/Kids" className="hover:text-white">
                Kids
              </Link>
            </div>
          </div>

          <div className="p-5">
            <h1 className="font-bold">Get Help</h1>
            <div className="pt-4 flex flex-col gap-2 text-zinc-500 font-light text-sm">
              <Link href="/" className="hover:text-white">
                Order Status
              </Link>
              <Link href="/" className="hover:text-white">
                Shipping & Delivery
              </Link>
              <Link href="/" className="hover:text-white">
                Returns
              </Link>
              <Link href="/" className="hover:text-white">
                Payment Options
              </Link>
            </div>
          </div>

          <div className="p-5">
            <h1 className="font-bold">About Us</h1>
            <div className="pt-4 flex flex-col gap-2 text-zinc-500 font-light text-sm">
              <Link href="/" className="hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/" className="hover:text-white">
                Cookies
              </Link>
              <Link href="/" className="hover:text-white">
                Data Settings
              </Link>
            </div>
          </div>

          <div className="p-5">
            <h1 className="font-bold">Contact Us</h1>
            <div className="pt-4 flex flex-col gap-2 text-zinc-500 font-light text-sm">
              <div className="hover:text-white">
                <Room /> Ireland
              </div>
              <div className="hover:text-white">
                <Phone /> +353 12 345 678
              </div>
              <div className="hover:text-white">
                <Email /> MuaviaIjazGhazi@gmail.com
              </div>
            </div>
          </div>

          <div className="p-5 flex gap-2">
            <div className="text-zinc-500 hover:text-white">
              <Link target="_blank" href="https://github.com/MauvG">
                <GitHub fontSize="large" />
              </Link>
            </div>
            <div className="text-zinc-500 hover:text-white">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/muavia-ghazi/"
              >
                <LinkedIn fontSize="large" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col p-10 justify-center text-center">
          <div className="p-5">
            <h1 className="font-bold">Useful Links</h1>
            <div className="pt-4 flex flex-col gap-2 text-zinc-500 font-light text-sm">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/Men" className="hover:text-white">
                Men
              </Link>
              <Link href="/Women" className="hover:text-white">
                Women
              </Link>
              <Link href="/Kids" className="hover:text-white">
                Kids
              </Link>
            </div>
          </div>

          <div className="p-5">
            <h1 className="font-bold">Get Help</h1>
            <div className="pt-4 flex flex-col gap-2 text-zinc-500 font-light text-sm">
              <Link href="/" className="hover:text-white">
                Order Status
              </Link>
              <Link href="/" className="hover:text-white">
                Shipping & Delivery
              </Link>
              <Link href="/" className="hover:text-white">
                Returns
              </Link>
              <Link href="/" className="hover:text-white">
                Payment Options
              </Link>
            </div>
          </div>

          <div className="p-5">
            <h1 className="font-bold">About Us</h1>
            <div className="pt-4 flex flex-col gap-2 text-zinc-500 font-light text-sm">
              <Link href="/" className="hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/" className="hover:text-white">
                Cookies
              </Link>
              <Link href="/" className="hover:text-white">
                Data Settings
              </Link>
            </div>
          </div>

          <div className="p-5">
            <h1 className="font-bold">Contact Us</h1>
            <div className="pt-4 flex flex-col gap-2 text-zinc-500 font-light text-sm">
              <div className="hover:text-white">
                <Room /> Ireland
              </div>
              <div className="hover:text-white">
                <Phone /> +353 12 345 678
              </div>
              <div className="hover:text-white">
                <Email /> MuaviaIjazGhazi@gmail.com
              </div>
            </div>
          </div>

          <div className="p-5 flex gap-2 text-center justify-center">
            <div className="text-zinc-500 hover:text-white">
              <Link target="_blank" href="https://github.com/MauvG">
                <GitHub fontSize="large" />
              </Link>
            </div>
            <div className="text-zinc-500 hover:text-white">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/muavia-ghazi/"
              >
                <LinkedIn fontSize="large" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
