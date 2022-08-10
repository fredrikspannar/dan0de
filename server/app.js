import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import trek from 'trek-quotes';

import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();

// middleware
if ( process.env.NODE_ENV == "production" ) {
    // use gzip compression middleware
    const compression = require('compression');
    app.use(compression());

}

app.use(helmet()); // security headers

app.use(bodyParser.json());  // form data
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/category', categoryRoutes);



// send all undefined routes to status 404
app.use((req, res, next) => {
    res.status(404).send(trek.randomQuote()+" ( 404 Page Not Found )");
})

// export testable module app
export default app;