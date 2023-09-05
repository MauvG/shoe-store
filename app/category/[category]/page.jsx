"use client";

import ErrorPage from "@/components/ErrorPage";
import Category from "@/components/Category";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch("/api/shoes")
      .then((res) => {
        if (!res.ok) setLoading(false);
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        if (
          params.category === "men" ||
          params.category === "women" ||
          params.category === "kids"
        ) {
          setData(data);
          setCategory(params.category);
        }

        setLoading(false);
      });
  }, []);

  if (isLoading) return <p></p>;
  if (!data) return <ErrorPage />;

  return <Category shoes={data} category={category} />;
};

export default page;
