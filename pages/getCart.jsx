export async function getServerSideProps(context) {
  // const res = await fetch("http://localhost:3000/api/cart");
  const res = await fetch("https://mg-footwear.vercel.app/api/cart");
  const data = await res.json();
  return data;
}
