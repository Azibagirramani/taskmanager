const mongoose = require("mongoose");

const dev = "mongodb://localhost:27017/?readPreference=primary&ssl=false"

const prd = "mongodb+srv://admin:g1yS1G2Y2LFB9dMF@server.5d9pa.mongodb.net/slug?retryWrites=true&w=majority"

mongoose.connect(prd,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});