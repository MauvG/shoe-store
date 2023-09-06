"use client";

import ErrorPage from "@/components/ErrorPage";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
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

  if (isLoading) return <Loading />;
  if (!data) return <ErrorPage />;

  return (
    <div>
      <ShoePage shoe={data} />
      <Footer />
    </div>
  );
};

export default page;
