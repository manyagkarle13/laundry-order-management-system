import React, { useState } from "react";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {

  const [refreshKey, setRefreshKey] = useState(0);

  const refreshOrders = () => {
    setRefreshKey(old => old + 1);
  };

  return (

    <div className="App">
      <div className="container">
        <h1>🧺 Laundry System</h1>

        <Dashboard />

        <OrderForm refreshOrders={refreshOrders} />

        <OrderList key={refreshKey} />
      </div>
    </div>

  );

}

export default App;