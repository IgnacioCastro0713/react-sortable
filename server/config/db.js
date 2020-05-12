const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/react-sort-db",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  function () {
    console.log("connected to the database");
  }
);
