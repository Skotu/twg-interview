import express from "express";
import cookieParser from "cookie-parser";

import products from "./routes/products";

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/products", products);

app.listen(3001, () => console.log(`Server started at part: 3001 `));
