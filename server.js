const express = require(express);
const app = express();
const port = 3000;


//middleware para interpretar JSON//
app.use(express.json());

app.get("/user", (req, res) =>)