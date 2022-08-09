import categoryModel from "../models/categoryModel.js";

const index = (req, res) => {
    // get all
    categoryModel.find({})
        .then((categories) => {
            res.status(200).json(categories);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
    
}



// return (export functions)
export default {
    index
}