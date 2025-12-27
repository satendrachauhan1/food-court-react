import Footer from "./Footer";
import { useState, useEffect } from "react";
import Header from "./Header";
import FoodCard from "./FoodCard";
import Cart from "./Cart";
import AddressForm from "./AddressForm";
import Orders from "./Orders";
import foods from "./data";

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("foodCart");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");
  const [page, setPage] = useState("home");

  useEffect(() => {
    localStorage.setItem("foodCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (food) => {
    const existing = cart.find(i => i.name === food.name);
    if (existing) {
      setCart(cart.map(i =>
        i.name === food.name ? { ...i, qty: i.qty + 1 } : i
      ));
    } else {
      setCart([...cart, { ...food, qty: 1 }]);
    }
  };

  const updateQty = (name, type) => {
    setCart(
      cart
        .map(i =>
          i.name === name
            ? { ...i, qty: type === "inc" ? i.qty + 1 : i.qty - 1 }
            : i
        )
        .filter(i => i.qty > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("foodCart");
  };

  const filteredFoods = foods.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  const cartCount = cart.reduce((a, b) => a + b.qty, 0);

  return (
    <>
      <Header
        cartCount={cartCount}
        search={search}
        setSearch={setSearch}
        setPage={setPage}
      />

    {page === "home" && (
  <>
    <div className="grid">
      {filteredFoods.map((food, i) => (
        <FoodCard
          key={i}
          food={food}
          addToCart={addToCart}
          cart={cart}
        />
      ))}
    </div>
    <Footer />
  </>
)}


      {page === "cart" && (
        <Cart cart={cart} updateQty={updateQty} setPage={setPage} />
      )}

      {page === "address" && (
        <AddressForm cart={cart} clearCart={clearCart} setPage={setPage} />
      )}

      {page === "orders" && <Orders setPage={setPage} />}
    </>
  );
}

export default App;
