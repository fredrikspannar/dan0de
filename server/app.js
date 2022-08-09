import express from "express";
import categoryRoutes from "./routes/categoryRoutes.js";
import trek from 'trek-quotes';

const app = express();


// routes
app.use('/category', categoryRoutes);



// send all undefined routes to status 404
app.use((req, res, next) => {
    res.status(404).send(trek.randomQuote()+" ( 404 Page Not Found )");
})

// export testable module app
export default app;