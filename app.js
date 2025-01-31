require("dotenv").config();
const express = require("express")
const app = express()
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/product")

app.get("/",(req, res)=>{
    res.send("Hello World!")
});

//middleware use
app.use("/api/products",products_routes);

const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () =>{
            console.log(`${PORT} Yes I am Connected`);
        });
    }catch(err){
        console.error(err)
    }
};

start();