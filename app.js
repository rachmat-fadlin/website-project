const PORT = 3000;
const HOST = '0.0.0.0'

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running at host ${HOST} port ${PORT}`);
  } else {
    console.log("Hello, there is " + err);
  }
});
