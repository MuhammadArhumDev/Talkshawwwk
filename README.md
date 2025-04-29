# ✨ Full Stack Realtime Chat App

> A modern, scalable, and secure real-time chat application built with the MERN stack, Socket.IO, TailwindCSS, and optimized state management using Zustand.

---

## 🚀 Table of Contents

- [🌟 Features](#-features)
- [🛠️ Tech Stack](#️️-tech-stack)
- [📦 Prerequisites](#-prerequisites)
- [⚙️ Installation](#️-installation)
- [🔧 Environment Variables](#-environment-variables)
- [📂 Project Structure](#-project-structure)
- [📖 Usage](#-usage)
- [📈 Build & Start](#-build--start)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🌟 Features

- **Authentication & Authorization**: Secure login and signup flows with JSON Web Tokens (JWT).
- **Real-time Messaging**: Bi‑directional communication using Socket.IO.
- **Online User Status**: Instantly see who’s online and actively chatting.
- **Global State Management**: Efficient state handling with Zustand for fast UI updates.
- **Responsive Design**: Beautiful UI with TailwindCSS and DaisyUI components.
- **Error Handling**: Robust client‑side and server‑side error management.
- **Media Support**: Upload and display images in chat using Cloudinary buckets.

---

## 🛠️ Tech Stack

| Layer      | Technology                    |
| ---------- | ----------------------------- |
| Frontend   | ReactJS, TailwindCSS, DaisyUI |
| Backend    | Node.js, ExpressJS            |
| Database   | MongoDB (Mongoose ODM)        |
| Real-Time  | Socket.IO                     |
| Auth       | JWT (JSON Web Token)          |
| Storage    | Cloudinary                    |
| State Mgmt | Zustand                       |

---

## 📦 Prerequisites

- **Node.js** v14 or higher
- **npm** v6 or higher
- **MongoDB** Atlas cluster (or local instance)
- **Cloudinary** account for media uploads

---

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MuhammadArhumDev/Talkshawwwk.git
   cd Talkshawwwk
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## 🔧 Environment Variables

Create a `.env` file in the root directory and add the following keys:

```dotenv
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

> **Tip**: Never commit your `.env` file to source control. Add it to your `.gitignore`.

---

## 📂 Project Structure

```plaintext
realtime-chat-app/
│
├── client/                # React frontend
│   ├── public/
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── pages/         # Route-based pages
│       ├── store/         # Zustand stores
│       └── utils/         # Helper functions and constants
│
├── server/                # Express backend
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Auth, error handlers
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API endpoints
│   └── utils/             # Config and helpers
│
├── .env                   # Environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## 📖 Usage

1. **Start Backend**

   ```bash
   cd backend
   npm install
   npm start
   ```

2. **Start Frontend**

   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Navigate** to `http://localhost:5173` to explore the chat application.

---

## 📈 Build & Start

> Builds optimized production bundles and starts the server.

1. **Build the app**

   ```bash
   npm run build
   ```

2. **Start the app**
   ```bash
   npm start
   ```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "feat: add new feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

© 2025 Your Name. All rights reserved.
