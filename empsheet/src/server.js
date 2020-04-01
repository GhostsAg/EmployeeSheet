const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/emplist", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});