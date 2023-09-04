"use client";

import Category from "@/components/Category";
import { useEffect, useState } from "react";

const page = () => {
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
    <div>
      <Category shoes={shoesData} category="women" />
    </div>
  );
};

export default page;
