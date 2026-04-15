import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE from "./api";

function OrderList() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchOrders = async () => {

    try {

      const response = await axios.get(
        `${API_BASE}/api/orders/list/`,
      );

      setOrders(response.data);

    } catch (error) {

      console.error("Error fetching orders:", error);

    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {

    fetchOrders();

  }, []);

  const filteredOrders = orders.filter(order => {
    const matchesStatus = !filterStatus || order.status === filterStatus;
    const matchesSearch = !searchTerm || 
      order.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.phone.includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  if (loading) {
    return <div className="loading">📋 Loading orders...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="table-section">
        <h2>📋 Orders List</h2>
        <div className="loading" style={{ color: "#999" }}>No orders yet. Create one to get started!</div>
      </div>
    );
  }

  return (

    <div className="table-section">

      <h2>📋 Orders List ({filteredOrders.length}/{orders.length})</h2>

      <div className="filter-section">
        <div className="filter-group">
          <input
            type="text"
            placeholder="🔍 Search by customer name or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="">📊 All Status</option>
            <option value="RECEIVED">RECEIVED</option>
            <option value="PROCESSING">PROCESSING</option>
            <option value="READY">READY</option>
            <option value="DELIVERED">DELIVERED</option>
          </select>
        </div>

        {(searchTerm || filterStatus) && (
          <button
            onClick={() => {
              setSearchTerm("");
              setFilterStatus("");
            }}
            className="filter-reset"
          >
            ✕ Clear Filters
          </button>
        )}
      </div>

      <div className="table-container">
        <table>

          <thead>

            <tr>

              <th>👤 Name</th>
              <th>📱 Phone</th>
              <th>👕 Garment</th>
              <th>📦 Qty</th>
              <th>💰 Total</th>
              <th>📊 Status</th>

            </tr>

          </thead>

          <tbody>

            {filteredOrders.length > 0 ? (
              filteredOrders.map(order => (

                <tr key={order.id}>

                  <td>{order.customer_name}</td>

                  <td>{order.phone}</td>

                  <td>{order.garment}</td>

                  <td style={{ textAlign: "center" }}>{order.quantity}</td>

                  <td style={{ fontWeight: "600", color: "#0f9fb8" }}>₹{order.total}</td>

                  <td>

                    <select
                      className="status-select"
                      value={order.status}

                      onChange={async (e) => {

                        await axios.put(
                          `${API_BASE}/api/orders/status/${order.id}/`,
                          {
                            status: e.target.value
                          }
                        );

                        fetchOrders();

                      }}

                    >

                      <option value="RECEIVED">RECEIVED</option>
                      <option value="PROCESSING">PROCESSING</option>
                      <option value="READY">READY</option>
                      <option value="DELIVERED">DELIVERED</option>

                    </select>

                  </td>

                </tr>

              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: "30px", color: "#999" }}>
                  No orders match your filters
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>

    </div>

  );

}

export default OrderList;