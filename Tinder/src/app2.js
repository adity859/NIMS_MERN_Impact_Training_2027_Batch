const express = require("express");

const app = express();

// app.use("/", (req, res) => {
//     res.send("YOOOOOOOOO!");
// });

app.get("/user", (req, res) => {
  res.send({ firstName: "Bhavesh", lastName: "Mali", city: "Jaipur" });
});

app.post("/user", (req, res) => {
  res.send("Data saved to DB!!!");
});

app.delete("/user", (req, res) => {
  res.send("Data deleted!!");
});

app.use("/", (req, res) => {
  res.send("Hello from the serverwwwwww!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
