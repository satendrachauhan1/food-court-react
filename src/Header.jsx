function Header({ cartCount, search, setSearch, setPage }) {
  return (
    <header>
      <h1>🍔 Food Court</h1>

      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="header-actions">
        <button className="nav-btn" onClick={() => setPage("orders")}>
          📦 Orders
        </button>

        <button className="nav-btn cart-btn" onClick={() => setPage("cart")}>
          🛒 Cart
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;
