function FoodCard({ food, addToCart, cart }) {
  const item = cart.find(i => i.name === food.name);
  const qty = item ? item.qty : 0;

  return (
    <div className="food-card">
      <img src={`/images/${food.image}`} alt={food.name} />
      <h3>{food.name}</h3>
      <h4>₹{food.price}</h4>

      <div className="add-cart-box">
        <button className="add-btn" onClick={() => addToCart(food)}>
          ➕ Add to Cart
        </button>

        {qty > 0 && <span className="qty-badge">{qty}</span>}
      </div>
    </div>
  );
}

export default FoodCard;
