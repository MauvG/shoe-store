"use client";

import Explore from "@/components/Explore";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [shoesData, setShoesData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/shoes");
      const data = await response.json();
      setShoesData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) return <Loading />;
  if (!shoesData) return;

  return (
    <main className="tracking-wider">
      <Featured
        shoesData={shoesData}
        autoSlide={true}
        autoSlideInterval={5000}
      />
      <Explore />
      <Footer />
    </main>
  );
}
