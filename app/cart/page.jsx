import Cart from "@/components/Cart";

async function getCart() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/cart/records?page=1&perPage=30"
  );

  const data = await res.json();
  return data?.items;
}

const page = async () => {
  const cart = await getCart();
  console.log(cart);

  return (
    <div>
      <Cart cart={cart} />
    </div>
  );
};

export default page;
