import express from "express";
import data from "../data/data.json";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { query } = req.query;

    const filteredData = data
      .map((category) => {
        const filteredProducts = category.products.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredProducts.length === 0) {
          return null;
        }

        return {
          ...category,
          products: filteredProducts,
        };
      })
      .filter(Boolean);

    res.json(filteredData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
