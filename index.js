import express from "express";
import cors from "cors";
import { connection } from "./src/database/database.onnection.js";
import bootstrap from "./src/module/bootstrap.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.use('/api', bootstrap)


app.listen(port, () => console.log(`App listening on port ${port}!`));