import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "HELLO" });
});

app.listen(3333, () => console.log("Server running"));
