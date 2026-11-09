# EvnentHub - Modern Event Management Platform 🎫

A modern, visually appealing, and fully responsive event management website built with React and Tailwind CSS. This platform allows users to explore upcoming events, view detailed information, and seamlessly register for their preferred experiences.

## 🌟 Features

- **Modern Glassmorphism UI:** A sleek, premium design with animated background blobs and smooth hover effects.
- **Dark/Light Mode Toggle:** Persistent theme preference managed via `localStorage`.
- **Event Discovery & Filtering:** Browse upcoming events, search by name/venue, and filter by categories (Tech, Music, Workshop, Sports, Art).
- **Real-Time Countdown Timers:** Dynamic countdowns on event cards showing exactly how much time is left until the event starts.
- **Detailed Event Modal:** Click on any event card to view a beautifully crafted modal with full event details and imagery.
- **Interactive Registration Form:** Collects Name, Email, and Phone number with strict frontend validation (Regex for email and 10-digit phone number).
- **LocalStorage Data Management:** Event registrations are securely saved locally on the user's browser, persisting across reloads.
- **Fully Responsive:** Perfectly optimized for mobile phones, tablets, and large desktop screens.

**Live Demo:** [https://EventHub.vercel.app](https://eventhub-o2b7tofaz-kavya-100s-projects.vercel.app/) 

## 🛠️ Tech Stack

- **Framework:** [React.js](https://react.dev/) (Bootstrapped with [Vite](https://vitejs.dev/))
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Data Management:** State Management (`useState`, `useEffect`) and Browser `localStorage`.

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. **Clone or Download the Repository:**
   Extract the downloaded zip file or clone the repository using Git.
   ```bash
   git clone https://github.com/Kavya-100/Design-and-Develop-a-Responsive-Event-Management-Website.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd event-management-app
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```

5. **Open in Browser:**
   Click the `localhost` link provided in your terminal (usually `http://localhost:5173/`) to view the application.

## 📂 Folder Structure

```text
📦 event-management-app
 ┣ 📂 src
 ┃ ┣ 📜 App.jsx        # Main application component & UI logic
 ┃ ┣ 📜 index.css      # Global CSS and custom animations
 ┃ ┗ 📜 main.jsx       # React application entry point
 ┣ 📜 index.html       # HTML template
 ┣ 📜 tailwind.config.js # Tailwind CSS configuration
 ┣ 📜 vite.config.js   # Vite bundler configuration
 ┣ 📜 package.json     # Project dependencies and scripts
 ┗ 📜 README.md        # Project documentation
```

## 🎯 Bonus Challenges Completed

- [x] **Dark/Light Mode:** Implemented with `localStorage` persistence.
- [x] **Event Countdown Timers:** Custom dynamic React component calculating real-time difference.
- [x] **Animations:** CSS keyframes for floating blobs, smooth modal mounting, and hover transitions.
- [x] **LocalStorage Registration:** Form submissions are validated and stored in `event_registrations` array within local storage.

## 🌐 Deployment on Vercel

1. Create a `vercel.json` file in the root directory (to handle React Router if added later):
   ```json
   {
     "rewrites": [ { "source": "/(.*)", "destination": "/index.html" } ]
   }
   ```
2. Push your code to a GitHub repository.
3. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
4. Import your GitHub repository.
5. Vercel will automatically detect Vite. Click **Deploy**.
6. Your site will be live in minutes!

## 📝 License

This project is open-source and available for educational and portfolio purposes.
