
const express = require("express");
const app = express();
const cors = require('cors'); // whitelist my own computer

app.use(cors());

app.use(express.json());

const db = require('./models');


//Routes
const nodeModRouter = require("./routes/NodeMod");
app.use("/NodeMod", nodeModRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server Running on Port 3001");
    });
});

