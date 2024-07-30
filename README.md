# BaatCheet(Video Calling App)

A React-based video calling application with a Node.js backend. This app leverages Socket.io for real-time communication and WebRTC for establishing peer-to-peer video calls. The app includes a lobby screen for joining rooms and a room page for initiating video calls. The Context API is used for managing socket connections efficiently.

## Features

- Real-time video calls using WebRTC.
- Room-based system for organizing calls.
- Direct peer-to-peer connections for low latency and high quality.
- Context API for efficient socket connection management.


## Getting Started

### Prerequisites

- Node.js installed on your machine.
- npm or yarn as a package manager.

### Installation

1. **Clone the repository:**
    ```bash
    git clone <https://github.com/shrikant9024/baatcheet.git>
    ```

2. **Install dependencies for the backend:**
    ```bash
    cd server
    npm install
    ```

3. **Install dependencies for the frontend:**
    ```bash
    cd client
    npm install
    ```

### Running the App

1. **Start the backend server:**
    ```bash
    cd servwer
    npm start
    ```

2. **Start the frontend:**
    ```bash
    cd client
    npm run dev
    ```

### Usage

- Open the app in your  with 2 diff account for testing browser.
- Enter your email and room number in the lobby to join a room(Make sure room number should be same for both).
- Use the room page to initiate or receive video calls.


