
const orders = [
  {
    id: "ORD-1001",
    item: "Wireless Headphones",
    date: "18 Oct 2026",
    amount: "₹2,499",
    status: "Shipped",
  },
  {
    id: "ORD-1002",
    item: "Smart Watch",
    date: "17 Oct 2026",
    amount: "₹3,999",
    status: "Processing",
  },
  {
    id: "ORD-1003",
    item: "Laptop Backpack",
    date: "16 Oct 2026",
    amount: "₹1,299",
    status: "Delivered",
  },
];

export default function CurrentOrders() {
  return (
    <div>
      <div className="section-heading">
        <div>
          <h2>Current Orders</h2>
          <p>Track your active purchases.</p>
        </div>
        <span className="count">{orders.length} orders</span>
      </div>

      <div className="order-list">
        {orders.map((order) => (
          <article className="order-card" key={order.id}>
            <div className="product-icon">📦</div>

            <div className="order-info">
              <h3>{order.item}</h3>
              <p>{order.id} · {order.date}</p>
            </div>

            <div className="order-right">
              <strong>{order.amount}</strong>
              <span className={`status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
