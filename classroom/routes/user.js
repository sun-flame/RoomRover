const express = require("express");
const router = express.Router();

router.get ("/", (req,res) => {
    res.send("get for users");
});

router.get("/:id" , (req, res) => {
    res.send("get for show users");
});

router.post("/", (req, res) => {
    res.send ("Post for Users");
});

router.delete("/:id", (req, res) => {
    res.send ("delete for Users");
});

module.exports = router;