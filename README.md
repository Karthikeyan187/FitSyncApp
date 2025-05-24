# FitSync - Full-Stack Fitness Tracking Application

FitSync is a modern full-stack fitness tracking web application designed to help users seamlessly manage and optimize their workout routines. Built with React, Node.js, Express, and MongoDB, it features secure user authentication, detailed workout logging, and insightful progress tracking through an intuitive dashboard. The platform also includes an AI-powered fitness chatbot to provide personalized fitness guidance. With responsive design, light/dark theme options, and comprehensive content including tutorials and blogs, FitSync delivers a professional, user-centric experience ideal for fitness enthusiasts and developers alike.

## Features

- User authentication with signup and signin
- Workout logging with detailed stats (sets, reps, weight, duration, calories)
- Dashboard with workout summaries, weekly stats, and category charts
- AI-powered fitness chatbot for personalized guidance
- Tutorials, blogs, and contact pages for additional resources
- Light and dark theme support
- Responsive design for desktop and mobile
- State management with Redux Toolkit
- RESTful API backend with Express and MongoDB

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js and npm installed
- MongoDB instance running and accessible
- OpenAI API key for chatbot functionality

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Karthikeyan187/FitSyncApp.git
cd <repository-folder>
```

2. Install server dependencies and set environment variables:

```bash
cd server
npm install
# Create a .env file with MONGODB_URL and OPENAI_API_KEY
```

3. Install client dependencies:

```bash
cd ../client
npm install
```

### Running the Application

1. Start the backend server:

```bash
cd server
npm start
```

2. Start the frontend development server:

```bash
cd ../client
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to use the app.

## Available Scripts (Client)

In the `client` directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.
- `npm run eject`: Ejects the app (one-way operation).

## Learn More

- [React documentation](https://reactjs.org/)
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [Express documentation](https://expressjs.com/)
- [MongoDB documentation](https://docs.mongodb.com/)
- [OpenAI API documentation](https://platform.openai.com/docs/)
 
 
Feel free to contribute or raise issues to improve FitSync!



