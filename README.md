# Laundry Order Management System

A full-stack web application for managing laundry orders, tracking order status, and monitoring operations.
The system allows users to create orders, update status, search records, and view dashboard analytics.
This project demonstrates API development, frontend integration, database usage, and cloud deployment.

---

# 🌐 Live Deployment

Frontend:
https://laundry-order-management-system.onrender.com

Backend API:
https://laundry-backend-fi5z.onrender.com

Admin Panel:
https://laundry-backend-fi5z.onrender.com/admin/

---

# 🔹 Setup Instructions

## Clone Repository

```
git clone https://github.com/your-username/laundry-order-management-system.git
cd laundry-order-management-system
```

---

## Backend Setup

```
cd backend

python -m venv venv
venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate
python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```
cd frontend

npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# 🔹 Features Implemented

## Core Functionality

✔ Create new laundry orders
✔ Update order status
✔ Delete orders
✔ Display order list
✔ Search orders by customer name or phone
✔ Filter orders by status
✔ Dashboard analytics
✔ Real-time data updates
✔ Admin panel management
✔ REST API integration
✔ Full-stack deployment

---

## Dashboard Features

* Total Orders counter
* Total Revenue calculation
* Status breakdown:

```
RECEIVED
PROCESSING
READY
DELIVERED
```

---

# 🔹 API Endpoints

```
GET    /api/orders/list/
POST   /api/orders/create/
PUT    /api/orders/update/<id>/
DELETE /api/orders/delete/<id>/
GET    /api/orders/dashboard/
```

---

# 🔹 Database

Database used:

```
SQLite
```

Data stored:

* Customer name
* Phone number
* Garment type
* Quantity
* Total price
* Order status
* Created timestamp

---

# 🔹 Data Persistence Note (Important)

This application is deployed using the **Render free tier**, which uses a temporary filesystem.

### What this means

The project uses:

```
SQLite database
```

On the free hosting plan:

* The server may sleep after inactivity
* The service may restart
* The database file may reset

When this happens:

```
db.sqlite3
```

may be recreated, and previously stored data (orders) may disappear.

---

### Example Scenario

1. User creates orders
2. Server restarts or sleeps
3. Database resets
4. Dashboard shows:

```
Total Orders: 0
Total Revenue: ₹0
```

This is expected behavior on free-tier hosting and is not a system bug.

---

### Production Solution

In production, the application would use:

```
PostgreSQL
```

This provides:

* Permanent data storage
* Reliable persistence
* Production-ready deployment

---

# 🔹 AI Usage Report

## Tools Used

* ChatGPT
* GitHub Copilot

---

## Where AI Was Used

AI assisted with:

* Debugging Django errors
* Fixing API routing
* Connecting frontend to backend
* Setting up deployment
* Handling environment variables
* Writing API integration
* Resolving status update issues
* Creating documentation

---

## Sample Prompts Used

```
Fix Django 500 error on update endpoint
```

```
Connect React frontend to deployed backend
```

```
Why does my data reset on Render deployment?
```

```
How to deploy Django and React on Render?
```

---

## What AI Got Wrong

* Suggested incorrect API route initially
* Missed view reference in Django URL configuration
* Required manual verification of deployment settings

---

## What Was Improved Manually

* Fixed API routing logic
* Corrected backend endpoint configuration
* Verified status update persistence
* Configured deployment settings
* Debugged production environment

---

# 🔹 Tradeoffs

## What Was Skipped

* Authentication system
* Payment integration
* Email notifications
* Pagination
* Role-based access control

---

## Why These Were Skipped

Due to:

* Time constraints
* Focus on core system functionality
* Prioritizing deployment and API stability

---

## What Would Be Improved With More Time

* User login authentication
* PostgreSQL database integration
* Order history tracking
* Estimated delivery date feature
* Email notifications
* Responsive mobile UI
* Unit testing
* Docker containerization

---

# 🔹 API Collection / Demo

The system can be demonstrated using:

* Frontend user interface
* Admin dashboard
* API endpoints
* Browser testing
* Screenshots

---

## Example API Response

```
[
  {
    "id": 1,
    "customer_name": "Manya",
    "phone": "1234567890",
    "garment_type": "Saree",
    "quantity": 1,
    "total": 100,
    "status": "RECEIVED"
  }
]
```

---

# 🔹 Bonus Tasks Completed

✔ Added frontend (React)
✔ Connected frontend to backend
✔ Stored data in database
✔ Implemented search functionality
✔ Implemented status tracking
✔ Implemented dashboard analytics
✔ Deployed backend to Render
✔ Deployed frontend to Render

---

# 🔹 Tech Stack

Frontend:

* React.js
* Axios
* JavaScript
* CSS

Backend:

* Django
* Django REST Framework
* SQLite
* CORS Headers
* WhiteNoise

Deployment:

* Render
* GitHub

---

# 🔹 Project Structure

```
laundry-order-management-system/
│
├── backend/
│   ├── backend/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   │
│   ├── orders/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py
│   │   └── admin.py
│   │
│   ├── db.sqlite3
│   ├── requirements.txt
│   └── manage.py
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── Dashboard.js
│   │   ├── OrderForm.js
│   │   └── OrderList.js
│   │
│   └── package.json
│
└── README.md
```

# 🔹 Author

Manya G Karle
Information Science Engineering Student

---

# 🔹 License

This project is created for educational and demonstration purposes.
