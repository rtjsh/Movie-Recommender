# 🍿 Movie Recommender (May 2025)

**Movie Recommender** is a sleek, responsive, and visually appealing web app built with **React JS**, **Tailwind CSS**, and **Firebase**. This app helps users find their next favorite movie by displaying trending titles in stylish cards that highlight key details like the **IMDB rating**, **title**, and **poster**.

## ✨ Features

- 🔥 Fetches and displays trending movies using Firebase as Backend-as-a-Service (BaaS)
- 🎬 Stylish movie cards with poster, title, and IMDB rating
- 📱 Fully responsive layout for both mobile and desktop
- ⚡ Smooth and intuitive user interface using Tailwind CSS
- ☁️ Real-time database integration via Firebase

## 🛠 Tech Stack

- **Frontend**: React JS
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore / Realtime Database)


## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- Firebase project setup (with Firestore or Realtime DB)

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/movie-recommender.git
cd movie-recommender

# Install dependencies
npm install

# Set up Firebase
# Add your Firebase config to a .env file or directly in your Firebase init file

# Start the development server
npm run dev

```

### API Used:
```bash
const API_BASE_URL = "https://api.themoviedb.org/3";
```

## 🔐 Firebase Setup
### Steps:
Go to Firebase Console

Create a new project and enable Firestore/Realtime Database

Get your Firebase config from Project Settings

### Add the config to your project in .env file:
```bash
.env

VITE_TMDB_API_KEY = yours

VITE_APPWRITE_PROJECT_ID = yours

VITE_APPWRITE_DATABASE_ID = yours

VITE_APPWRITE_COLLECTION_ID = yours
``` 

Import to "App.jsx" using for all:
```bash
const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
```

## Future Enhancements:
🔎 Search functionality

🎯 Genre-based filtering

❤️ Favorite/Watchlist system

🗂 Sorting by rating, year, etc.

## Contributing
Contributions are welcome! Fork the repo and submit a pull request.

### Built with 🎬 by movie lovers, for movie lovers.