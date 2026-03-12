# 📚 Library Management API

A RESTful API for managing books in a library system.
Built using **Node.js, Express.js, and MongoDB (Atlas)**.
The API supports full **CRUD operations** for books.

---

## 🚀 Live API

https://library-api-i-qu39.onrender.com

---

# ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Render (Deployment)
* Postman (API Testing)

---

# 📁 Project Structure

```
library-api
│
├── config
│   └── db.js
│
├── controllers
│   └── bookController.js
│
├── middleware
│   └── errorMiddleware.js
│
├── models
│   └── Book.js
│
├── routes
│   └── bookRoutes.js
│
├── .env
├── package.json
└── server.js
```

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/Om23131212/library-api.git
```

Go to project folder

```bash
cd library-api
```

Install dependencies

```bash
npm install
```

Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run server

```bash
npm run dev
```

---

# 📚 API Endpoints

## 1️⃣ Create Book

POST /books

Example Body

```json
{
"title": "NodeJS Guide",
"author": "Om",
"isbn": "123456",
"genre": "Programming",
"publisher": "TechBooks",
"publicationYear": 2024,
"totalCopies": 10,
"availableCopies": 10,
"shelfLocation": "A1",
"bookType": "Circulating"
}
```

---

## 2️⃣ Get All Books

GET /books

Example

```
https://library-api-i-qu39.onrender.com/books
```

---

## 3️⃣ Get Book by ID

GET /books/:id

Example

```
/books/665a3dcb98123abcde
```

---

## 4️⃣ Update Book

PUT /books/:id

---

## 5️⃣ Delete Book

DELETE /books/:id

---

# 🧪 Testing

Use **Postman** to test the API endpoints.

---

# ☁️ Deployment

The API is deployed on **Render**

Deployment Steps:

1. Push project to GitHub
2. Connect GitHub repo with Render
3. Add environment variables
4. Deploy

---

# 👨‍💻 Author

Om Prakash Kannaujiya
B.Tech CSE (AI)

GitHub
https://github.com/Om23131212
