import ShoePage from "@/components/ShoePage";

async function getShoe(shoeID) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/shoes/records/${shoeID}`
  );
  const data = await res.json();
  return data;
}

const page = async ({ params }) => {
  const shoe = await getShoe(params.shoe);

  return (
    <div>
      <ShoePage shoe={shoe} />
    </div>
  );
};

export default page;
