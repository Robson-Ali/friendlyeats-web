# FriendlyEats Web (Enhanced Version)

A modern, Firebase-powered restaurant discovery demo web app.

FriendlyEats is a sample application built to demonstrate best-practice usage of Firebase Web, including Firestore, Authentication, Emulator Suite, Hosting, and modern frontend architecture.
This version improves on Google’s original FriendlyEats demo with clearer setup, updated SDKs, and a smoother local-development workflow.

🚀 Features

Firebase Authentication (Google Sign-In)

Cloud Firestore (restaurants, reviews, user data)

Firestore queries: ordering, filtering, real-time listeners

Firebase Emulator Suite for full offline development

Firebase Hosting deployment ready

Fully modular Firebase v9+ SDK

Clean UI for browsing and rating restaurants

📦 Tech Stack

Firebase (Auth, Firestore, Hosting, Storage)

Firebase Emulator Suite

JavaScript (ES Modules)

Webpack / Vite (depending on repo config)

HTML + CSS

Node.js (for dev tools)

🛠️ Prerequisites

Make sure you have:

Node.js ≥ 16

Firebase CLI installed:

npm install -g firebase-tools


A Firebase project created at
https://console.firebase.google.com/

📁 Project Setup
1️⃣ Clone the repository
git clone https://github.com/Robson-Ali/friendlyeats-web
cd friendlyeats-web

2️⃣ Install dependencies
npm install

🔥 Firebase Setup
3️⃣ Initialize Firebase in this folder

If you haven't already:

firebase init


Select:

Firestore

Authentication

Hosting

Storage

Emulators (optional but recommended)

4️⃣ Configure Firebase credentials

Create:

/src/firebase-config.js


Add your config:

import { initializeApp } from "firebase/app";

export const firebaseApp = initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
});

🧪 Running Locally (Firebase Emulator Suite)

To run the full app locally:

firebase emulators:start


Runs:

Firestore Emulator

Auth Emulator

Hosting Emulator (usually http://localhost:5000)

🌐 Deployment

Deploy to Firebase Hosting:

firebase deploy


After deployment, your site will be live at:

https://YOUR_PROJECT_ID.web.app

🧩 Project Structure
friendlyeats-web/
├── public/               # Static assets & Hosting root
├── src/
│   ├── components/       # UI components
│   ├── data/             # Firebase interaction, Firestore queries
│   ├── firebase-config.js
│   ├── auth.js           # Modular Firebase Auth logic
│   └── index.js
├── firebase.json         # Hosting + emulator config
├── .firebaserc           # Project alias config
├── package.json
└── README.md

🔧 Development Notes

The app uses Firestore's modern modular API (getFirestore, query, getDocs, etc.)

Auth uses onIdTokenChanged and onAuthStateChanged from the public API
(no internal _delegate calls)

The project runs cleanly in the emulator without needing real Firebase data

Works with Firebase CLI v12+

🤝 Contributing

Pull requests are welcome! You may contribute by:

Improving UI/UX

Adding new filters or restaurant categories

Upgrading the codebase to a framework (React/Vue/Svelte)

Improving documentation or fixing issues

📄 License

This project is based on Google’s FriendlyEats sample and follows the original licensing terms.
See LICENSE for details.

⭐ Support

If this project helped you, consider giving the repo a star ⭐ on GitHub!
