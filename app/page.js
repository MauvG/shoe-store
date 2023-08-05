import Explore from "@/components/Explore";
import Featured from "@/components/Featured";

export async function getShoesData() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/shoes/records"
  );
  const data = await res.json();
  return data?.items;
}

export default async function Home() {
  const shoesData = await getShoesData();

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
