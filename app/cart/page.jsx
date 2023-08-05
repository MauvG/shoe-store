import Cart from "@/components/Cart";

// async function getCart() {
//   const res = await fetch("http://127.0.0.1:8090/api/collections/cart/records");//
//   const data = await res.json();
//   return data?.items;
// }

const page = async () => {
  // const cart = await getCart();

  return (
    <div>
      <Cart />
    </div>
  );
};

export default page;
