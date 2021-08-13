const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my API");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT} . . .`)
});