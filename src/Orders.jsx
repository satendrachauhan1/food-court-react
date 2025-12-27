import { useState } from "react";

function Orders({ setPage }) {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("foodOrders")) || []
  );

  const deleteOrder = (id) => {
    const updated = orders.filter(o => o.orderId !== id);
    setOrders(updated);
    localStorage.setItem("foodOrders", JSON.stringify(updated));
  };

  return (
    <div className="box">
      <button className="back-btn" onClick={() => setPage("home")}>⬅ Back</button>
      <h2>Your Orders</h2>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map((o, i) => (
        <div key={i} className="order-card">
          <b>Order ID:</b> {o.orderId}<br />
          <b>Date:</b> {o.date}
          <ul>
            {o.items.map((it, j) => (
              <li key={j}>{it.name} × {it.qty}</li>
            ))}
          </ul>
          <button onClick={() => deleteOrder(o.orderId)}>Delete Order</button>
        </div>
      ))}
    </div>
  );
}

export default Orders;
