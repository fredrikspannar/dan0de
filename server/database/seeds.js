import dbConnect from "../db.js";

import Category from "../models/categoryModel.js";
import { categoriesSeed } from "./categorySeed.js";

const mongoDB_URL = process.env.NODE_MONGODB;

dbConnect(mongoDB_URL)
    .then(()=>{
        console.log(`Connected to MongoDB`);
        
        // seed categories
        const seedDB = async () => {
            await Category.deleteMany({});
            await Category.insertMany(categoriesSeed);


        }

        seedDB().then(()=>{
            
            console.log(`Seeded ${categoriesSeed.length} categories!`);
            process.exit(1);
        });

    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB: ',err);
        process.exit(1);
    });