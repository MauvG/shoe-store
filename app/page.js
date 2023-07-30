import Featured from "@/components/Featured";

export default function Home() {
  return (
    <main className="tracking-wider">
      <div className="bg-cyan-600 text-center text-white p-1">
        Use code: SALE for 25% Off!
      </div>
      <Featured autoSlide={false} />
      <h1 className="text-center text-2xl font-bold m-10 ">
        Who are you shopping for?
      </h1>
    </main>
  );
}
