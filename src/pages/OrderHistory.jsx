
const orders = [
  {
    id: "ORD-0988",
    item: "Bluetooth Speaker",
    date: "10 Oct 2026",
    amount: "₹1,799",
  },
  {
    id: "ORD-0972",
    item: "Mechanical Keyboard",
    date: "05 Oct 2026",
    amount: "₹2,899",
  },
  {
    id: "ORD-0955",
    item: "USB-C Hub",
    date: "28 Sep 2026",
    amount: "₹999",
  },
];

export default function OrderHistory() {
  return (
    <div>
      <div className="section-heading">
        <div>
          <h2>Order History</h2>
          <p>Your previous purchases.</p>
        </div>
        <span className="count">{orders.length} orders</span>
      </div>

      <div className="order-list">
        {orders.map((order) => (
          <article className="order-card" key={order.id}>
            <div className="product-icon">🛍️</div>

            <div className="order-info">
              <h3>{order.item}</h3>
              <p>{order.id} · {order.date}</p>
            </div>

            <div className="order-right">
              <strong>{order.amount}</strong>
              <span className="status delivered">Completed</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
