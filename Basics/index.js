// index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotEnv = require("dotenv");
const db = require("./db");
const s = require("./math/math")

dotEnv.config();
const app = express();

const port = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Server is started in web browser 💻"));





app.get("/s", (req,res)=>{
  const v =parseInt(req.query.value);
  const result = s(v);
  console.log(result)
  res.send(result);

})



app.listen(port, () => {
    console.log(`\n\t Server is running on port: ${port}`);
    db();
});
