function Cart({ cart, updateQty, setPage }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="box">
      <button className="back-btn" onClick={() => setPage("home")}>⬅ Back</button>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item, i) => (
        <div key={i}>
          {item.name} – ₹{item.price} × {item.qty}
          <br />
          <button onClick={() => updateQty(item.name, "dec")}>−</button>
          <button onClick={() => updateQty(item.name, "inc")}>+</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      {cart.length > 0 && (
        <button onClick={() => setPage("address")}>Place Order</button>
      )}
    </div>
  );
}

export default Cart;
