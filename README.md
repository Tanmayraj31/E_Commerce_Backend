# 🛍️ E-Commerce Backend (Node.js + Express + MongoDB)

A fully functional **E-Commerce backend** built using **Node.js**, **Express**, and **MongoDB**, following the **MVC architecture**.
This project supports secure authentication, role-based access control, and admin-only product management — all tested using **Postman**.

---

## 🚀 Features

* **User Authentication**

  * JWT-based login & signup
  * Password hashing using `bcrypt`
* **Role-Based Access**

  * Admin and regular user roles
  * Middleware protection for admin routes
* **Product Management**

  * Admin-only product CRUD operations
  * Public access for product listings
* **Validation**

  * Request body validation using `Zod`
* **Clean Architecture**

  * Organized into Controllers, Models, Routes, and Middleware
  * Easy to scale and maintain

---

## 🧩 Tech Stack

| Category           | Technology         |
| ------------------ | ------------------ |
| **Runtime**        | Node.js            |
| **Framework**      | Express.js         |
| **Database**       | MongoDB + Mongoose |
| **Validation**     | Zod                |
| **Authentication** | JWT                |
| **Security**       | bcrypt, dotenv     |
| **Testing**        | Postman            |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/E_Commerce_Backend.git
cd E_Commerce_Backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_SECRET=your_admin_secret_key
```

### 4️⃣ Start the server

```bash
npm start
```

Server will start at:

```
http://localhost:5000
```

---

## 🧠 API Overview

### 👤 Auth Routes

| Method | Endpoint            | Description             | Protected |
| ------ | ------------------- | ----------------------- | --------- |
| POST   | `/api/users/signup` | Register a new user     | ❌         |
| POST   | `/api/users/signin` | Login and get JWT token | ❌         |

### 🛍️ Product Routes

| Method | Endpoint            | Description         | Protected |
| ------ | ------------------- | ------------------- | --------- |
| GET    | `/api/products`     | Get all products    | ❌         |
| GET    | `/api/products/:id` | Get a product by ID | ❌         |
| POST   | `/api/products`     | Create a product    | ✅ Admin   |
| PUT    | `/api/products/:id` | Update a product    | ✅ Admin   |
| DELETE | `/api/products/:id` | Delete a product    | ✅ Admin   |

---

## 🔐 Admin Access

To create an admin:

* Provide the correct `ADMIN_SECRET` during signup in the request body.

Example (Postman):

```json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "123456",
  "admin": "your_admin_secret_key"
}
```

---

## 🧪 Testing

Use **Postman** to test all endpoints:

1. Signup → Login → Get JWT token
2. Add token to the `Authorization` header as `Bearer <token>`
3. Access protected routes

---

## 🧰 Project Structure

```
E_Commerce_Backend/
│
├── controllers/
│   ├── userController.js
│   └── productController.js
│
├── models/
│   ├── userModel.js
│   └── productModel.js
│
├── routes/
│   ├── userRoutes.js
│   └── productRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── config/
│   └── db.js
│
├── server.js
├── .env.example
├── .gitignore
└── package.json
```

---

## 🕒 Development Timeline

This project was designed, developed, and tested over **3 weeks**, focusing on learning core backend concepts like:

* Authentication & Authorization
* RESTful API design
* Database integration
* Middleware flow and error handling

---

## 📚 Future Improvements

* Integrate with a React frontend
* Add order management and payment gateway
* Implement pagination and search

---

## 👨‍💻 Author

**Tanmay Raj**
📧 https://www.linkedin.com/in/tanmay-raj-a2568024b/ 

---

## 🏷️ License

This project is open-source under the **MIT License**.
