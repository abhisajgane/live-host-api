require("dotenv").config();
const connectDB = require("./db/connect");
const product = require("./models/product");
const ProductJson = require("./products.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await product.deleteMany();
        console.log("Connected to MongoDB");
        await product.create(ProductJson);
        console.log("Data inserted successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB or inserting data:", error);
    }
};

start();
