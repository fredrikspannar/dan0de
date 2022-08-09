// imports server-app from module
import app from "./app.js"

// get port env and start
const PORT = process.env.NODE_PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});