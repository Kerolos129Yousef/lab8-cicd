const express = require('express');
const { MongoClient } = require('mongodb');
const os = require('os');

const app = express();
const PORT = 3000;

// Use the environment variable passed from docker-compose, 
// defaulting to the service name 'db' [cite: 19]
const url = process.env.MONGO_URL || 'mongodb://db:27017';
const dbName = 'taskdb';
let db;

async function connectDB() {
    const client = new MongoClient(url);
    await client.connect();
    db = client.db(dbName);
    console.log("Connected successfully to MongoDB");
}

app.get('/', (req, res) => {
    res.json({
        app: 'CISC 886 Lab 8 CI/CD',
        host: os.hostname(),
        database: "MongoDB"
    });
});

app.get('/tasks', async (req, res) => {
    // 1. Check if the database variable is initialized
    if (!db) {
        return res.status(503).json({ error: "Database connection not established yet. Please wait." });
    }

    try {
        const collection = db.collection('tasks');
        const tasks = await collection.find({}).toArray();
        
        // 2. Group the tasks as required [cite: 72]
        const grouped = Object.groupBy(tasks, task => task.status);
        res.json(grouped);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch tasks from database" });
    }
});
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App running on http://localhost:${PORT}`);
    });
});
