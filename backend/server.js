const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth.routes');
const gradesRoutes = require('./routes/grades.routes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' })); // Increased limit for file uploads

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/grades', gradesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
