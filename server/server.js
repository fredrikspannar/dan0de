import app from "./app.js";
import mongoose from "mongoose";

const mongoDB_URL = process.env.NODE_MONGODB;

mongoose.connect(mongoDB_URL, { useNewUrlParser: true })
    .then(()=>{
        console.log(`Connected to MongoDB`);

        // get port env and start
        const PORT = process.env.NODE_PORT || 8000;

        // start server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB: ',err);
        process.exit(1);
    });

