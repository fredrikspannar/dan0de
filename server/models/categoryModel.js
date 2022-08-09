import mongoose from "mongoose";
import slugify from "slugify";

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true // this property should not be able to change later
    },
    updatedAt: Date
});

// middleware on save(create) and update
categorySchema.pre('save', (category, next) => {

    // update the date every time a blog post is saved
    category.updatedAt = Date.now(); 

    // update slug from title
    category.slug = slugify(category.title.toLowerCase());

    // continue..
    next();
});

const Category = mongoose.model('Category', categorySchema);
export default Category;