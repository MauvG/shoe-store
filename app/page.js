"use client";

import Explore from "@/components/Explore";
import Featured from "@/components/Featured";
import { useEffect, useState } from "react";

export default function Home() {
  const [shoesData, setShoesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/shoes");
      const data = await response.json();
      setShoesData(data);
    };

    fetchData();
  }, []);

  if (!shoesData) return;

  return (
    <main className="tracking-wider">
      <Featured
        shoesData={shoesData}
        autoSlide={true}
        autoSlideInterval={5000}
      />
      <Explore />
    </main>
  );
}
