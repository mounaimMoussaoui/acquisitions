import env from"env.config.j";
import express from "express.js";


const port = env.process.Port || 3000;
const app = express();



app.listen(port, () => {
    console.log(`App listening At Http://localhost:${port}`);
});