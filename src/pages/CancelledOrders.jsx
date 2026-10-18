
const orders = [
  {
    id: "ORD-0912",
    item: "Gaming Mouse",
    date: "22 Sep 2026",
    amount: "₹1,499",
  },
  {
    id: "ORD-0880",
    item: "Phone Case",
    date: "15 Sep 2026",
    amount: "₹499",
  },
];

export default function CancelledOrders() {
  return (
    <div>
      <div className="section-heading">
        <div>
          <h2>Cancelled Orders</h2>
          <p>Review your cancelled purchases.</p>
        </div>
        <span className="count">{orders.length} orders</span>
      </div>

      <div className="order-list">
        {orders.map((order) => (
          <article className="order-card" key={order.id}>
            <div className="product-icon">↩️</div>

            <div className="order-info">
              <h3>{order.item}</h3>
              <p>{order.id} · {order.date}</p>
            </div>

            <div className="order-right">
              <strong>{order.amount}</strong>
              <span className="status cancelled">Cancelled</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
