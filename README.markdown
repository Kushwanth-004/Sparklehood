# 🛡️ HumanChain AI Safety — Incident Log API

Welcome to the **Incident Log API**, a backend service developed as part of the HumanChain AI Safety Take-Home Assignment. This API is designed to log, manage, and retrieve AI safety-related incidents, contributing to HumanChain's mission of building a safer, more trustworthy, and human-centric digital world.

## 📖 Overview
- **Project Type**: Backend API Service
- **Goal**: Log and manage hypothetical AI safety incidents
- **Company**: HumanChain — Deep-Tech AI Safety Startup
- **Focus**: API design, request handling, data persistence (basic)

## 🛠️ How I Created It
The project was built through the following steps:
- Initialized a Node.js project using `npm init`.
- Set up **Express.js** to quickly build a flexible and lightweight server.
- Followed **MVC Architecture**:
  - **Model**: Defined the structure for incidents.
  - **Controller**: Wrote logic for handling API requests.
  - **Routes**: Connected URLs to controller actions.
- Built core APIs to create and fetch incidents.
- Used **Nodemon** during development for automatic server restarts.
- Handled errors cleanly for missing modules and invalid requests.
- Organized the code for easy scalability and future database integration (currently using in-memory storage).

## ⚙️ Technologies Used
- **Node.js** — Backend JavaScript runtime
- **Express.js** — Web application framework
- **Nodemon** — For auto-reloading during development
- **JavaScript (ES6+)** — Core language used

## 🌟 Features Implemented
- **Create New Incident**: Log a new AI safety incident with relevant details.
- **Fetch All Incidents**: Retrieve a list of all reported incidents.
- **Modular Architecture**: organized using the MVC (Model-View-Controller) pattern.
- **Error Handling**: Basic validation and error messaging.
- **Simple In-Memory Storage**: Data is stored temporarily during server runtime.

## 🧩 Project Structure
```
sparklehood/
├── src/
│   ├── app.js                      # Server entry point
│   ├── controllers/
│   │   └── incidentController.js   # Handles API logic
│   ├── models/
│   │   └── incidentModel.js        # Incident schema (temporary in-memory)
│   └── routes/
│       └── incidentRoutes.js       # Defines API endpoints
├── package.json
├── README.md
```

## 🚀 How to Install and Run
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/humanchain-incident-log-api.git
   cd humanchain-incident-log-api
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Server**
   ```bash
   npm run dev
   ```
   This will run the project using nodemon on `localhost:5000`.

## 🛡️ API Endpoints
| Method | Endpoint           | Description                          |
|--------|--------------------|--------------------------------------|
| GET    | `/api/incidents`   | Retrieve all logged incidents        |
| POST   | `/api/incidents`   | Log a new AI safety incident         |

## 📦 Example Requests
### GET all incidents
```bash
GET http://localhost:5000/api/incidents
```

### POST a new incident
```bash
POST http://localhost:5000/api/incidents
Content-Type: application/json

{
  "title": "Bias Detected in AI Model",
  "description": "The recommendation system showed biased results based on user demographics.",
  "severity": "Medium"
}
```

## 🚀 Future Enhancements
- Add **MongoDB** database for persistent storage.
- Implement data validation using libraries like `express-validator`.
- Include authentication (JWT) for secured access.
- Create pagination and filtering features for incidents.
- Build a frontend dashboard to visualize incidents (React.js).

## 📄 License
This project is licensed under the **MIT License**.  
Feel free to use, adapt, and extend it for learning or further development.

## 🙌 Thank You!
Built with care for HumanChain’s mission of ensuring safer AI systems.