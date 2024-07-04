# Chat Application

A simple chat application built with React Native, Redux Toolkit, and MockAPI.

## Features

- Fetch, create, and delete chats
- Real-time messaging

## Technologies Used

- React Native
- Redux Toolkit
- Axios
- MockAPI
- Socket.io

## Getting Started

### Installation

1. Clone the repository and install dependencies:

   ```sh
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   npm install
   ```

2. Start the Expo server:

   ```sh
   npm start
   ```

## MockAPI Setup

1. Go to MockAPI and create a new project.

2. Create a chats resource with the following fields:

- id (UUID)
- name (String)
- createdAt (Date)
- messages (Array of objects with id, text, and createdAt)

3. Replace API_URL in the code with your MockAPI URL:

```sh
const API_URL = "https://<your-mockapi-url>.mockapi.io/chats";
```

## MockAPI Setup

1. Start the Expo server:

```sh
npm start
```

2. Use the Expo app to scan the QR code.
