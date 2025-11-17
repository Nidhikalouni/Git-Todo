import 'dotenv/config'
import express from 'express'
import { connectDB } from './config/db.js';
import todoRoutes from "./router/todo.routes.js";

const app = express();
app.use(express.json());

await connectDB();

// API ROUTES FIRSTcl
app.use("/api", todoRoutes);

// HOME ROUTE LAST
app.get('/', (req, res) => {
    res.send('Hello from Express');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
