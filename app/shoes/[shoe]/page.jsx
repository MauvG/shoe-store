"use client";

import ErrorPage from "@/components/ErrorPage";
import ShoePage from "@/components/ShoePage";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/shoes/${params.shoe}`)
      .then((res) => {
        if (!res.ok) setLoading(false);
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p></p>;
  if (!data) return <ErrorPage />;

  return <ShoePage shoe={data} />;
};

export default page;
