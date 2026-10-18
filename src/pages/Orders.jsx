
import { NavLink, Outlet } from "react-router-dom";

export default function Orders() {
  return (
    <>
      <div className="page-heading">
        <div>
          <p className="eyebrow">CUSTOMER OPERATIONS</p>
          <h1>My Orders</h1>
          <p className="subtitle">
            Manage and track all your shopping orders in one place.
          </p>
        </div>

        <div className="order-symbol">▤</div>
      </div>

      <nav className="tabs">
        <NavLink to="current" className={({ isActive }) =>
          isActive ? "tab active" : "tab"
        }>
          Current Orders
        </NavLink>

        <NavLink to="history" className={({ isActive }) =>
          isActive ? "tab active" : "tab"
        }>
          Order History
        </NavLink>

        <NavLink to="cancelled" className={({ isActive }) =>
          isActive ? "tab active" : "tab"
        }>
          Cancelled Orders
        </NavLink>
      </nav>

      <section className="content-panel">
        <Outlet />
      </section>
    </>
  );
}
