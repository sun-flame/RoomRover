const express = require("express");
const app = express();
const users = require("./routes/user.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cookieParser());

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "namaste");
    res.cookie("madein", "INDIA");
    res.send("sent you some cookies!");
});

app.get ("/" , (req , res ) => {
    console.dir(req.cookies);
    res.send("hi, im root!");
});

app.use("/users", users); 

app.listen(3000, () => {
    console.log("server is listining to 3000");
});