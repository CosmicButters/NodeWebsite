const express = require('express');
const router = express.Router();


const { NodeMod } = require("../models");


// Get data
router.get("/", async (req, res) => {
    const listNodeMod = await NodeMod.findAll();
    res.json(listNodeMod);
});

// Add data
router.post("/", async (req, res) => {
    const post = req.body;
    await NodeMod.create(post);
    res.json(post);
});

// Delete Data
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await NodeMod.destroy({ where: { id } });
    res.send("Data deleted successfully.");
});


module.exports = router;