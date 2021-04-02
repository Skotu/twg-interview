import express from "express";
import cookieParser from "cookie-parser";

import dataRoute from "./routes/dataRoute";

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/data", dataRoute);

app.listen(3001, () => console.log(`Server started at part: 3001 `));
