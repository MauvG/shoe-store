import Explore from "@/components/Explore";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <main className="tracking-wider">
      <Featured autoSlide={true} autoSlideInterval={5000} />
      <Explore />
    </main>
  );
}
