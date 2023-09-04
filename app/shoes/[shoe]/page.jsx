"use client";

import ErrorPage from "@/components/ErrorPage";
import ShoePage from "@/components/ShoePage";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [shoeData, setShoeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/shoes/${params.shoe}`);
      const data = await response.json();
      setShoeData(data);
    };

    fetchData();
  }, []);

  if (!shoeData) return <ErrorPage />;

  return <ShoePage shoe={shoeData} />;
};

export default page;
