import app from "./app.js";
import dbConnect from "./db.js";

const mongoDB_URL = process.env.NODE_MONGODB;

dbConnect(mongoDB_URL)
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
        consolelog('Failed to connect to MongoDB: ',err);
        process.exit(1);
    });

