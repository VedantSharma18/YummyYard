const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectToMongoDB = require("./config/recipeDB");
const recipeRoutes = require('./routes/recipeRoutes');


const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

connectToMongoDB();

app.use(cors({

    origin:[
        '*',
         "https://yummy-yard-client.vercel.app"
        ]
    ,credentials:true
}));


app.use('/yummyYard/recipes', recipeRoutes);

app.use('/yummyYard/recipes/log_signup/auth', authRoutes);

app.get('/', async(req, res) => {
    res.status(200).send("It is working..");
} );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`yummyYard server is listening on port ${PORT}`);
});




 module.exports = app;