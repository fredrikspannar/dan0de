import express from "express";
import Category from "./../controllers/categoryController.js"
const router = express.Router();

// all routes are prefixed/grouped with /category

router.get('/', Category.index);


export default router;