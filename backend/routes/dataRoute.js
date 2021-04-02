import express from "express";
import data from "../data/data.json";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
