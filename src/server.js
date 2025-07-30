import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

import shortURLRoutes from "./routes/short_url_route.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/shorten", shortURLRoutes);

connectDB();

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;

