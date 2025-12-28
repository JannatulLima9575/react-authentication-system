# 🔐 React Firebase Authentication Project

This is a **React.js Authentication Project** built using **Firebase Authentication**.  
The main goal of this project is to understand how **user authentication systems** work in real-world web applications.

---

## 📌 Project Features

- ✅ User Registration (Email & Password)
- ✅ User Registration (Sign in with Google)
- ✅ User Login
- ✅ Logout Functionality
- ✅ Firebase Authentication Integration
- ✅ Error Handling

---

## 🛠️ Technologies Used

- **React.js**
- **Firebase Authentication**
- **React Router**
- **Tailwind CSS**
- **JavaScript (ES6+)**

---

## 🔑 What is Authentication?

**Authentication** means verifying **who the user is**.

Example:
- User login with email & password
- Firebase checks credentials
- If valid → user gets access

📌 This project uses **Firebase Authentication** to handle secure login & registration.

---

## 🔐 Why Firebase Authentication?

Firebase Authentication is used because:
- Easy to integrate
- Secure & reliable
- Supports Email/Password, Google, GitHub login
- Handles token & session management automatically

---

## 🔄 Authentication Flow

1️⃣ User registers or logs in  
2️⃣ Firebase verifies credentials  
3️⃣ Firebase returns an authentication token  
4️⃣ User state is stored  
5️⃣ Protected routes are accessible  

---

## 📂 Project Structure

```bash
src/
├── components/
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
├── routes/
├── firebase/
│   └── firebase.config.js
├── App.jsx
└── main.jsx

---

## 🚀 How to Run This Project Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/JannatulLima9575/react-authentication-system.git

### 2️⃣ Install dependencies
```bash
npm install

### 3️⃣ Setup Firebase

i. Go to Firebase Console
ii. Create a new Firebase project
iii. Enable Email/Password Authentication
iv. Copy your Firebase configuration
v. Paste it inside firebase.config.js

### 4️⃣ Run the project
```bash
npm run dev

---

## 📌 Important Learning Outcomes

i. Understanding Authentication vs Authorization
ii. Working with Firebase SDK
iii. Managing User State in React
iv. Implementing Protected / Private Routes
v. Learning Real-world Authentication Workflow

---

## 👩‍💻 Author

### Jannatul Lima
Software Engineer
📍 Bangladesh

---

### ⭐ Feedback

If you like this project, please give it a ⭐
Suggestions and improvements are always welcome!
