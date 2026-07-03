require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

//connect to database
connectDB();

const PORT = process.env.PORT || 3000;

//listen on port
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}.`);
})