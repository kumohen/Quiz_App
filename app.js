const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const { MONGO_URI } = require("./keys");

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("mongodb is connected");
});

require("./modal/Question");
require("./modal/auth");

app.use(express.json());
app.use(cors());

app.use(require("./routes/Question"));
app.use(require("./routes/auth"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
