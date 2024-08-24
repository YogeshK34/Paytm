# Paytm Backend Solution

A web application for transferring money securely between accounts, developed using React, Vite, Tailwind CSS, and Node.js with Express and PostgreSQL on the backend.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Signup, Signin)
- Dashboard for Account Overview
- Transfer Money between Accounts
- Success Page after Payment Completion

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm or Yarn
- PostgreSQL

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/YogeshK34/Paytm.git
   cd Paytm/backend
. Clone the Repository
bash
Copy code
git clone https://github.com/YogeshK34/Paytm.git
cd Paytm

2. Backend Setup
Navigate to the Backend Directory

bash
Copy code
cd backend
Install Dependencies

bash
Copy code
npm install
Configure Environment Variables

Create a .env file in the backend directory and add the following:

bash
Copy code
DATABASE_URL=postgresql://username:password@localhost:5432/your_database
JWT_SECRET=your_jwt_secret
Run Migrations

bash
Copy code
npx prisma migrate dev --name init
Start the Backend Server

bash
Copy code
npm start
3. Frontend Setup
Navigate to the Frontend Directory

bash
Copy code
cd ../frontend
Install Dependencies

bash
Copy code
npm install
Configure Environment Variables

Create a .env file in the frontend directory and add any required environment variables. For example:

bash
Copy code
VITE_API_URL=http://localhost:3000/api/v1
Start the Frontend Development Server

bash
Copy code
npm run dev


paytm-backend-solution/
├── backend/          # Node.js Express backend with PostgreSQL
│   ├── src/
│   ├── prisma/
│   ├── .env
│   └── package.json
├── frontend/         # React frontend using Vite
│   ├── src/
│   ├── public/
│   ├── .env
│   └── package.json
└── README.md


