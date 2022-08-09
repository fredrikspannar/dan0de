import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    title: String,
    slug: String,
    createdAt: Date,
    updatedAt: Date
});

const Category = model('Category', categorySchema);
export default Category;