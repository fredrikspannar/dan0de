import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title: String,
    slug: String,
    createdAt: Date,
    updatedAt: Date
});

const Category = mongoose.model('Category', categorySchema);
export default Category;