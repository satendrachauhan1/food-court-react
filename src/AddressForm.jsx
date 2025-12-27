function AddressForm({ cart, clearCart, setPage }) {
  const submitOrder = (e) => {
    e.preventDefault();

    const orderId = "ORD" + Date.now();

    const order = {
      orderId,
      items: cart,
      address: {
        name: e.target.name.value,
        phone: e.target.phone.value,
        address: e.target.address.value,
      },
      date: new Date().toLocaleString(),
    };

    const existing =
      JSON.parse(localStorage.getItem("foodOrders")) || [];

    localStorage.setItem(
      "foodOrders",
      JSON.stringify([...existing, order])
    );

    clearCart();
    alert(`Order Placed Successfully!\nOrder ID: ${orderId}`);
    setPage("home");
  };

  return (
    <div className="address-tab">
      <button className="back-btn" onClick={() => setPage("cart")}>
        ⬅ Back
      </button>

      <h2>Delivery Address</h2>

      <form onSubmit={submitOrder}>
        <input name="name" placeholder="Full Name" required />
        <input name="phone" placeholder="Phone Number" required />
        <textarea name="address" placeholder="Complete Address" required />

        <button type="submit" className="confirm-btn">
          Confirm Order
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
