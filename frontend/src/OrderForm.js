import React, { useState } from "react";
import axios from "axios";

function OrderForm({ refreshOrders }) {

  const [customer, setCustomer] = useState("");
  const [phone, setPhone] = useState("");
  const [garment, setGarment] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!customer || !phone || !garment || !quantity || !price) {
      setMessage("❌ Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/orders/create/",
        {
          customer_name: customer,
          phone: phone,
          garment: garment,
          quantity: Number(quantity),
          price: Number(price)
        }
      );

      setMessage("✅ Order created successfully!");
      
      setCustomer("");
      setPhone("");
      setGarment("");
      setQuantity(1);
      setPrice(0);

      setTimeout(() => setMessage(""), 3000);
      refreshOrders();
    } catch (error) {
      setMessage("❌ Error creating order");
      console.error(error);
    } finally {
      setLoading(false);
    }

  };

  return (

    <div className="form-section">
      <h2>➕ Create New Order</h2>

      {message && <div style={{ marginBottom: "20px", padding: "12px", borderRadius: "6px", backgroundColor: message.includes("✅") ? "#d4edda" : "#f8d7da", color: message.includes("✅") ? "#155724" : "#721c24" }}>
        {message}
      </div>}

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            placeholder="👤 Customer Name"
            value={customer}
            onChange={e => setCustomer(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="📱 Phone Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="👕 Garment Type"
            value={garment}
            onChange={e => setGarment(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="📦 Quantity"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            min="1"
            required
          />

          <input
            type="number"
            placeholder="💵 Price (₹)"
            value={price}
            onChange={e => setPrice(e.target.value)}
            min="0"
            step="0.01"
            required
          />
        </div>

        <button type="submit" className="form-button" disabled={loading}>
          {loading ? "Creating..." : "Create Order"}
        </button>

      </form>
    </div>
  );
}

export default OrderForm;