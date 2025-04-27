const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/database");
const incidentRoutes = require("./routes/incidentRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/incidents", incidentRoutes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => {
    console.log(err.message);
  });
