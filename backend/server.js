const app = require("./app");
const { connectDatabase } = require("./config/database");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 4000;
dotenv.config();

connectDatabase();

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})