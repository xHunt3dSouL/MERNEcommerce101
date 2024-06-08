const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const authRouter = require("./routes/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use(express.json());

// Define routes
app.use("/api/user", authRouter); // Use authRouter for user-related routes

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
