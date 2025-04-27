
# Sparklehood: HumanChain AI Safety Incident Log API

## Overview

The **HumanChain AI Safety Incident Log API** is a backend service designed to log, manage, and analyze AI safety incidents. This project is created as part of the assessment for a Backend Intern role at HumanChain, an AI safety startup. The goal of the service is to enable easy logging, tracking, and retrieval of hypothetical AI safety incidents in a secure and structured manner.

### Key Features:
- **Incident Logging**: Allows users to log AI safety incidents with detailed information.
- **Incident Retrieval**: Retrieve incident logs with different filtering options.
- **Incident Update**: Modify incident details after they have been logged.
- **Incident Deletion**: Remove incident logs as required.

---

## Development Process

The development of this API was carried out in a systematic manner:

1. **API Design**: Started by defining the necessary routes and endpoints to handle the operations (Create, Read, Update, Delete).
2. **Database Design**: Designed a simple database schema for storing incidents, including fields like `incidentId`, `type`, `description`, `timestamp`, and `status`.
3. **Route Implementation**: Created routes to handle logging, retrieving, updating, and deleting incidents.
4. **Testing**: Tested the API endpoints using Postman to ensure the functionality works correctly.
5. **Deployment**: Deployed the application using a Node.js server with Express and MongoDB for persistent data storage.

---

## Technologies Used

- **Node.js**: JavaScript runtime environment for building the API server.
- **Express.js**: Web framework for building the RESTful API.
- **MongoDB**: NoSQL database to store incident logs.
- **Mongoose**: ODM (Object Data Modeling) library to interact with MongoDB.
- **Nodemon**: Utility for automatically restarting the server during development.
- **Postman**: Tool for testing API endpoints.

---

## Features

### 1. **Incident Logging (POST)**
   - **Endpoint**: `/api/incidents`
   - **Method**: `POST`
   - **Description**: Logs a new AI safety incident into the system.
   - **Request Body**:
     ```json
     {
       "type": "Type of the incident",
       "description": "Detailed description of the incident",
       "status": "Status of the incident (e.g., 'open', 'resolved')"
     }
     ```
   - **Response**:
     - Success: `201 Created` with the incident data.
     - Error: `400 Bad Request` if data is missing or invalid.

### 2. **Retrieve Incident Logs (GET)**
   - **Endpoint**: `/api/incidents`
   - **Method**: `GET`
   - **Description**: Retrieves a list of all AI safety incidents stored in the system.
   - **Query Parameters**:
     - `status`: Filter incidents by status (optional).
     - `type`: Filter incidents by type (optional).
   - **Response**:
     - Success: `200 OK` with a list of incidents.
     - Error: `500 Internal Server Error` if a server error occurs.

### 3. **Update Incident (PUT)**
   - **Endpoint**: `/api/incidents/:id`
   - **Method**: `PUT`
   - **Description**: Updates an existing AI safety incident.
   - **Request Body**:
     ```json
     {
       "type": "Updated type",
       "description": "Updated description",
       "status": "Updated status"
     }
     ```
   - **Response**:
     - Success: `200 OK` with updated incident data.
     - Error: `404 Not Found` if the incident ID doesn't exist.

### 4. **Delete Incident (DELETE)**
   - **Endpoint**: `/api/incidents/:id`
   - **Method**: `DELETE`
   - **Description**: Deletes an incident by its ID.
   - **Response**:
     - Success: `200 OK` with a confirmation message.
     - Error: `404 Not Found` if the incident ID doesn't exist.

---

## How to Install and Use

### 1. Clone the Repository
Clone the repository from GitHub:
```bash
git clone https://github.com/Kushwanth-004/Sparklehood.git
cd Sparklehood
```

### 2. Install Dependencies
Install the required dependencies:
```bash
npm install
```

### 3. Set up MongoDB
Ensure MongoDB is running locally or use a cloud-based MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### 4. Run the Application
Start the application in development mode:
```bash
npm run dev
```

The server will be running at `http://localhost:5000` by default.

### 5. Test the API
Use a tool like [Postman](https://www.postman.com/) to test the endpoints.

---

## Conclusion

This API serves as a basic implementation of logging and managing AI safety incidents. The implementation is designed to be simple, efficient, and scalable for potential future expansion.
