const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.log("❌ MongoDB connection error:", err));

// Default route (for testing)
app.get('/', (req, res) => {
  res.send("🚀 India's No.1 TradeHub server is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ India's No.1 TradeHub server running on port ${PORT}`);
});
