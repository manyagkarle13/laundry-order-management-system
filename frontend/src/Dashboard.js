import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const response = await axios.get(
          "https://laundry-backend-fi5z.onrender.com/api/orders/dashboard/"
        );

        setData(response.data);

      } catch (error) {

        console.error("Dashboard error:", error);

      }

    };

    fetchDashboard();

  }, []);

  if (!data) return <div className="loading">📊 Loading dashboard...</div>;

  return (

    <div className="dashboard">

      <h2>Dashboard Overview</h2>

      <div className="dashboard-stats">
        
        <div className="stat-card">
          <h3>📦 Total Orders</h3>
          <div className="value">{data.total_orders}</div>
          <div className="subtext">All orders processed</div>
        </div>

        <div className="stat-card">
          <h3>💰 Total Revenue</h3>
          <div className="value">₹{data.total_revenue}</div>
          <div className="subtext">Lifetime earnings</div>
        </div>

      </div>

      <div className="status-counts">
        {data.status_counts && Object.entries(data.status_counts).map(([status, count]) => (
          <div key={status} className="status-item">
            <strong>{status}</strong>
            <span>{count}</span>
          </div>
        ))}
      </div>

    </div>

  );

}

export default Dashboard;