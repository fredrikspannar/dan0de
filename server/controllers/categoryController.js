
const index = (req, res) => {
    console.log(req.db);
    
    res.send("Hello World from routes.js");
}


export default {
    index
}