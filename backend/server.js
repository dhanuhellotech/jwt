const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/Router'); // Ensure the correct path to your router file

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json()); // Use express.json() to parse JSON bodies

// Routes
app.use('/api/task', router);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://dhanalakshmihellotech:pZimVlCpyTli6n3B@todo.hugefr0.mongodb.net/task", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});
