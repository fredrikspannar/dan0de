import mongoose from "mongoose";

async function dbConnect(dsn) { 
    await mongoose.connect(dsn, { useNewUrlParser: true });
}

export default dbConnect;