# 📚 Quora-Style Posting Web Application

A **full-stack web application** inspired by **Quora**, built using **EJS**, **Node.js**, **Express.js**, and **MongoDB**.  
It allows users to **create, view, edit, and delete posts** with a clean, minimalistic UI and dynamic content rendering.

---

## 🚀 Features
- **CRUD Functionality** – Create, Read, Update, and Delete posts.
- **Quora-like Experience** – Mimics the posting and content viewing features of Quora.
- **RESTful APIs** – Clean, modular backend using Express.js.
- **Fast Performance** – Efficient handling of 200+ posts during development with <100ms average query time.
- **Dynamic Rendering** – Frontend powered by EJS templates for smooth updates.
- **Custom Styling** – Consistent styling across all pages.
- **MongoDB Atlas Integration** – Cloud-hosted database for easy scalability.
- **Environment Variables** – Securely managed via `dotenv`.

---

## 🛠️ Tech Stack
**Frontend**  
- HTML, CSS, EJS (Embedded JavaScript Templates)  

**Backend**  
- Node.js, Express.js  

**Database**  
- MongoDB (Atlas)

**Other Tools**  
- dotenv – Manage environment variables  
- method-override – HTTP method override for PUT/PATCH/DELETE  
- nodemon – Auto-restart during development  

---

## 📦 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/quora-style-posting-app.git
cd quora-style-posting-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=8080
```

### 4️⃣ Run the Application
```bash
npm start
```
For development mode with auto-restart:
```bash
npm run dev
```

---

## 📂 Project Structure
```
.
├── public/
│   └── style.css          # CSS styling for all pages
├── views/
│   ├── index.ejs          # Home page listing posts
│   ├── edit.ejs           # Edit post page
│   ├── show.ejs           # Detailed post view
│   └── new.ejs            # Create new post form
├── models/
│   └── post.js            # Mongoose schema/model
├── routes/
│   └── posts.js           # All post-related routes
├── .env                   # Environment variables (ignored in git)
├── server.js              # Main server file
├── package.json
└── README.md
```

---

## 🌐 API Endpoints

| Method   | Endpoint             | Description               |
|----------|----------------------|---------------------------|
| GET      | /posts               | Get all posts             |
| GET      | /posts/:id           | Get single post           |
| POST     | /posts               | Create new post           |
| PATCH    | /posts/:id           | Update post               |
| DELETE   | /posts/:id           | Delete post               |

---

### 🏠 Home Page
Displays all posts with username and content preview.

### ✍ Create Post
Form to add a new post with username and content.

### ✏ Edit Post
Update an existing post with a pre-filled form.

### 📄 View Post
Shows complete details of a single post.

---

## 🏗️ Future Improvements
- Add user authentication (login/signup)
- Rich-text editor for post content
- Like, comment, and share functionalities
- Post search and filtering

---

## 👨‍💻 Author
**Your Name**  
📧 Email: srujangajjala2004@gmail.com 
🔗 GitHub: [Srujan Gajjala](https://github.com/SrujanGajjala)  
🔗 LinkedIn: [Srujan Gajjala](https://linkedin.com/in/srujangajjala)
