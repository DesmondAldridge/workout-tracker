//Imports
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Port
const PORT = process.env.PORT || 3000;

//Express Function
const app = express();

//Logger Function
app.use(logger("dev"));

//Parsing the Data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static Function
app.use(express.static("public"));

//Connection to Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//Listener
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});