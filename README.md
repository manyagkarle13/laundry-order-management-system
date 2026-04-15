# Laundry Order Management System

A full-stack web application for managing laundry orders, tracking order status, and monitoring business operations.
This system allows users to create and manage laundry orders while administrators can monitor and update order status through an admin dashboard.

---

## 🌐 Live Demo

**Frontend (User Interface):**
https://laundry-order-management-system.onrender.com

**Backend API:**
https://laundry-backend-fi5z.onrender.com

**Admin Panel:**
https://laundry-backend-fi5z.onrender.com/admin/

---

## 📌 Project Overview

The Laundry Order Management System is designed to simplify laundry business operations by enabling:

* Order creation and management
* Status tracking (Received → Processing → Ready → Delivered)
* Revenue and order analytics dashboard
* Admin-based order control
* Real-time updates between frontend and backend

This project demonstrates full-stack development using modern web technologies and deployment on cloud infrastructure.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS
* JavaScript

### Backend

* Django
* Django REST Framework
* SQLite Database
* CORS Headers
* WhiteNoise (Static file handling)

### Deployment

* Render (Cloud Hosting)
* GitHub (Version Control)

---

## 🚀 Features

* Create new laundry orders
* View list of all orders
* Update order status dynamically
* Search and filter orders
* Dashboard with:

  * Total orders
  * Total revenue
  * Status counts
* Admin panel for order management
* REST API integration
* Full deployment (Frontend + Backend)

---

## 📂 Project Structure

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

---

## ⚙️ Installation (Local Setup)

### 1. Clone Repository

```
git clone https://github.com/your-username/laundry-order-management-system.git
cd laundry-order-management-system
```

---

### 2. Backend Setup

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

### 3. Frontend Setup

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

## 🔌 API Endpoints

```
GET    /api/orders/list/
POST   /api/orders/create/
GET    /api/orders/dashboard/
PUT    /api/orders/update/<id>/
DELETE /api/orders/delete/<id>/
```

---

## 📊 Admin Access

Admin panel allows:

* Viewing all orders
* Editing order status
* Managing users
* Monitoring system data

Access:

```
https://laundry-backend-fi5z.onrender.com/admin/
```

---

## 🧪 Example Order Workflow

1. User creates an order
2. Order appears in dashboard
3. Admin updates status
4. System updates totals automatically

Status Flow:

```
RECEIVED
   ↓
PROCESSING
   ↓
READY
   ↓
DELIVERED
```

---

## 📈 Future Enhancements

* User authentication
* Payment integration
* Email notifications
* Order history reports
* PostgreSQL database
* Mobile responsiveness
* Role-based access control

---

## 🎯 Learning Outcomes

This project demonstrates:

* Full-stack application development
* REST API design
* React frontend integration
* Django backend development
* Cloud deployment
* Debugging and production setup
* Version control using Git

---

## 👩‍💻 Author

Manya G Karle
Information Science Engineering Student

---

## 📄 License

This project is created for educational and demonstration purposes.
