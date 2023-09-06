import "@/styles/globals.css";

import { Inter, Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "MG Footwear",
  description: "Online Shoe Store devloped in Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="min-h-screen flex flex-col text-zinc-800">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
