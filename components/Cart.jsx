const Cart = ({ cart }) => {
  return (
    <div>
      {cart.map((shoe) => (
        <h1>{shoe.name}</h1>
      ))}
    </div>
  );
};

export default Cart;
