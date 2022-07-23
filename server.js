const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello from ser!" });
});

app.post("/_v1", (req, res) => {
  console.log(req.body);
})

app.get("/_v1", (req,res) => {
    res.json({ message: "hello from v1"});
})



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});