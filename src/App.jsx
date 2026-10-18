
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Orders from "./pages/Orders";
import CurrentOrders from "./pages/CurrentOrders";
import OrderHistory from "./pages/OrderHistory";
import CancelledOrders from "./pages/CancelledOrders";

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <Link to="/" className="brand">
          <span className="brand-icon">S</span>
          ShopEase
        </Link>

        <span className="topbar-label">Order Management</span>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/orders" replace />} />

          <Route path="/orders" element={<Orders />}>
            <Route
              index
              element={<Navigate to="current" replace />}
            />
            <Route path="current" element={<CurrentOrders />} />
            <Route path="history" element={<OrderHistory />} />
            <Route path="cancelled" element={<CancelledOrders />} />
          </Route>

          <Route
            path="*"
            element={<h2>404 - Page Not Found</h2>}
          />
        </Routes>
      </main>
      </div>
  );
}
