import Category from "../models/categoryModel.js";
import slugify from "slugify";

const index = (req, res) => {
    // get all
    Category.find({})
        .then((categories) => {
            res.status(200).json(categories);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
    
}


const create = (req, res) => {
    const { title } = req.body;

    try {
        let category = new Category();
        category.title = title;
        category.slug = slugify(title.toLowerCase());

        category.save((err, categoryCreated) => {
                if (err) {
                    if ( err.name == "ValidationError") {
                        res.status(400).json({ "result" :"error", "message": "Check required fields"});
                    } else {
                        console.log('create category failed with =>',err)
                        res.status(500).json(err);
                    }

                } else {
                    res.status(201).send(categoryCreated);
                }
            });

    } catch(error) {
        console.log(error)

        res.status(500).json(error);
    }
}


// return (export functions)
export default {
    index,
    create
}